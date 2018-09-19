class Recipe < ApplicationRecord
  validates :name, presence: true
  has_many :ingredients through: :users
  
end
