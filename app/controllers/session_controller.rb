class SessionController < ApplicationController

  def new
    render :new
  end

  def index
    render :index
  end

  def create
    user = User.find_by(username: params[:username])
# binding.pry
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      # redirect_to '/index'
      render :index
    else 
      @error = true
      render :new
    end
  end

  def maptest
    render :maptest
  end

  def test
    user = User.find_by(id: params[:id])

    render :index_temp_test
  end

  # def destroy
  #   reset_session
  #   redirect_to '/login'
  # end

end