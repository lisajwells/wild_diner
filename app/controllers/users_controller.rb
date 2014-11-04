class UsersController < ApplicationController


# GET    /users_____users#index
  def index
    user_sightings = Sighting.where(user_id: session[:user_id])

    data = { user_sightings: user_sightings }

    respond_to do |format|
      format.json { render :json => data.to_json }
    end    
  end


# GET    /users/new_____users#new
  def new
    render :new
  end


# POST   /users_____users#create
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
