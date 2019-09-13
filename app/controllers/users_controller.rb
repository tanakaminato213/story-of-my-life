class UsersController < ApplicationController
  protect_from_forgery 

  def new
    @user = User.new()
  end

  def create
    @user = User.new(user_parems)
  if @user.save
    redirect_to root_path
  else
    render new
  end
end


  def edit
  end
  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :image)
  end
end
