class Message < ApplicationRecord
  mount_uploader :image, ImageUploader
  
  belongs_to :user
  has_many :like
  # has_many :comment

  validates :content, presence: true, unless: :image?
end
