require 'rails_helper'

RSpec.describe "Songs", type: :request do
  describe "GET /index" do
    it "gets a list of song" do
      User.create(
        email: 'email@email.com'
      )
      user= User.find 1
      expect(user.email).to eq 'email@email.com'
      # Song.create(
      #   title: "Alien Boy",
      #   artist: "Oliver Tree"
      # )
      # get '/songs'
      # song = JSON.parse(response.body)
      # expect(response).to have_http_status(200)
      # expect(song.length).to eq 1
    end
  end
  #   describe "POST /create" do
  #     it "add song" do
  #       song_params = {
  #         song: {
  #           title: "Alien Boy",
  #           artist: "Oliver Tree",
  #           user_id: 1       
  #         }
  #       }
  #       post '/songs', params: song_params
        
  #       expect(response).to have_http_status(200)
  #       song = Song.first
  #       p song
        
  #       expect(song['title']).to eq "Alien Boy"
  #   end
  # end
end
  