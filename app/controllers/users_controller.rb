class UsersController < ApplicationController

  def index
    user_sightings = Sighting.where(user_id: session[:user_id])

    # data = { id: id, username: username, food: food, location: location, photo_url: photo_url, season: season, description: description, created_at: created_at }

    data = { user_sightings: user_sightings }

    respond_to do |format|
      format.json { render :json => data.to_json }
    end    
  end


end
