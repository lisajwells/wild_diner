class SightingsController < ApplicationController


# this is where javascript comes to get sighting by id info
# GET    /sightings_____sightings#index
  def index
    sighting_id = params[:sightingId]

    sighting = Sighting.find_by(id: sighting_id)
    
    results = { sighting: sighting }

    respond_to do |format|
      format.json { render :json => results.to_json }
    end    
  end


# GET    /sightings/new_____sightings#new
  def new

  end

# to create new sighting
# POST   /sightings_____sightings#create
  def create

    food = params[:food]
    location = params[:location]
    season = params[:season]
    photo_url = params[:photo]
    description = params[:description]

    user = User.find_by(id: session[:user_id])

    search_location = location.tr(' ', '+s')

 # to get lat long
    response_google = HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?address="+search_location+"&key=AIzaSyD3P4t5g6dSiuu1HTeljU_lsVzjqpSinoc")

    lat = response_google["results"][0]["geometry"]["location"]["lat"]
    lng = response_google["results"][0]["geometry"]["location"]["lng"]

  Sighting.create ( {
      food: params[:food],
      description: params[:description],
      location: params[:location],
      season: params[:season],
      photo_url: params[:photo],
      user_id: user.id,
      lat: lat,
      lng: lng
    } )

    user_sightings = Sighting.where(user_id: session[:user_id])

    results = { user_sightings: user_sightings }

    respond_to do |format|
      format.json { render :json => results.to_json }
    end    

  end

end



