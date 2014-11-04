class SearchesController < ApplicationController

# to act on search form info
# POST   /searches_____searches#new
  def new

    season = params[:season]
    search_loc = params[:searchLocation]
    search_location = search_loc.tr!(' ', '+s')

 # to get lat long
    response_google = HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?address="+search_location+"&key=AIzaSyD3P4t5g6dSiuu1HTeljU_lsVzjqpSinoc")

    lat = response_google["results"][0]["geometry"]["location"]["lat"]
    lng = response_google["results"][0]["geometry"]["location"]["lng"]

  # to get all sightings by season
    season_sightings = Sighting.where(season: season)

    results = { lat: lat, lng: lng, season_sightings: season_sightings }
    
    respond_to do |format|
      format.json { render :json => results.to_json }
    end    

  end  


  # to get username from user_id for pinModal show
# GET    /searches_____searches#show
  def show
    userId = params[:userId]
    user = User.find_by(id: userId)
    username = user.username

    result = { username: username }

    respond_to do |format|
      format.json { render :json => result.to_json }
    end    
     
  end  

end


