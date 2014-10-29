class SightingsController < ApplicationController

  # this is where javascript comes to get sighting by id info
  def index

    sighting_id = params[:sightingId]
    
    sighting = Sighting.find_by(id: sighting_id)
    
    results = { sighting: sighting }

    respond_to do |format|
      format.json { render :json => results.to_json }
    end    


  end

end



