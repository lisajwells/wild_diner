class UsersController < ApplicationController

  def new
    render :new
  end


  def create
    user = User.create({
      username: params[:username],
      email: params[:email],
      password: params[:password],
      photo: params[:photo],
      bio: params[:bio],
    })
    
      # redirect to login
      redirect_to '/session/new'
  end


  def index
    user_sightings = Sighting.where(user_id: session[:user_id])

    data = { user_sightings: user_sightings }

    respond_to do |format|
      format.json { render :json => data.to_json }
    end    
  end


end
