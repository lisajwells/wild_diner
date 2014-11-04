class UsersController < ApplicationController

  def index
    user_sightings = Sighting.where(user_id: session[:user_id])

    data = { user_sightings: user_sightings }

    respond_to do |format|
      format.json { render :json => data.to_json }
    end    
  end

  def new
    render :new
  end


  def create
    User.create({
      username: params[:username],
      email: params[:email],
      password: params[:password],
      photo: params[:photo],
      bio: params[:bio],
    })

      redirect_to "/session/new"
  end




end
