class Song < ApplicationRecord
  belongs_to :user
  validates :title, :artist, :image, presence: true
  validates :title, :artist, length: { minimum: 2}
end
