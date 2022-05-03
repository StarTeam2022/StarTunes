class Song < ApplicationRecord
  belongs_to :user
  validates :title, :artist, :image, presence: true
  validates :title, :artist, :image, length: { minimum: 2}
  validates_uniqueness_of :title, scope: :artist
end
