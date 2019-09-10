class GroupsController < ApplicationController
  before_action :set_group, only: [:edit, :update]
  def index
  end

  def new
    @group = Group.new
    @group.users << current_user
    binding.pry
  end

  def create
    @group = Group.where(group_params)
    if @group
      @group = Group.new(group_params).save
      redirect_to root_path
      binding.pry
    else
      render :new
    end
  end

  def update
    if @group.update(group_params)
      redirect_to group_messages_path(@group)
      binding.pry
    else
      render :edit
    end
  end

  private

  def group_params
    params.require(:group).permit(:name, { :user_ids => [] })
  end

  def set_group
    @group = Group.find(params[:id])
  end
end