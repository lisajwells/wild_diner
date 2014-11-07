class User < ActiveRecord::Base
  has_secure_password  
  has_many :sightings

  validates :username, :email, :password, :bio, presence: true
  # validates :username, :email, uniqueness: true

end