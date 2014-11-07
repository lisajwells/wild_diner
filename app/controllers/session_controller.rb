class SessionController < ApplicationController


# GET    /session/new_____session#new
  def new
    render :new
  end

# GET    /session_____session#index
  def index
    @user = User.find_by(id: session[:user_id])
    if @user
      render :index
    else
      @error = true
      render :new
    end
  end

# POST   /session_____session#create
  def create
    user = User.find_by(username: params[:username])
    
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render :index
    else 
      @error = true
      render :new
    end
  end

  def destroy
    reset_session
    redirect_to '/'
  end

end