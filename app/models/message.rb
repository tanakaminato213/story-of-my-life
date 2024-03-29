class Message < ApplicationRecord
  mount_uploader :image, ImageUploader

  belongs_to :group
  belongs_to :user,optional: true
  has_many :like
  validates :text, presence: true, unless: :image?
end
