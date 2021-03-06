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

    location = params[:location]

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

  # to edit sighting 
  # GET    /sightings/:id/edit_____sightings#edit
  def edit
    sighting = Sighting.find(params[:id])
    food = sighting.food

    results = { sighting: sighting, food: sighting.food }

    respond_to do |format|
      format.json { render :json => results.to_json }
    end    
  end

  # PUT    /sightings/:id_____sightings#update
  def update
    sighting = Sighting.find(params[:id])
    location = params[:location]

    search_location = location.tr(' ', '+s')

    # to get lat long
    response_google = HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?address="+search_location+"&key=AIzaSyD3P4t5g6dSiuu1HTeljU_lsVzjqpSinoc")
    
    lat = response_google["results"][0]["geometry"]["location"]["lat"]
    lng = response_google["results"][0]["geometry"]["location"]["lng"]


    sighting.update ( {
      food: params[:food],
      description: params[:description],
      location: params[:location],
      season: params[:season],
      photo_url: params[:photo],
      lat: lat,
      lng: lng
    } )

    results = { sighting: sighting }

    respond_to do |format|
      format.json { render :json => results.to_json }
    end    
  end


  # DELETE /sightings/:id_____sightings#destroy
  def destroy
    sighting = Sighting.find(params[:id])
    sighting.destroy

    results = { sighting: sighting }

    respond_to do |format|
      format.json { render :json => results.to_json }
    end    
  end


  #   def destroy
  #   artist = Artist.find(params[:id])
  #   songs = Song.where(artist_id: artist.id)

  #   songs.each do |song|
  #     song.destroy
  #   end

  #   artist.destroy

  #   redirect_to '/artists'
  # end

  





end



