require 'rails_helper'

RSpec.describe "Songs", type: :request do
  let(:user) do
    User.create(
      email: 'yolo@aol.com', 
      password: 'coolguy55', 
      password_confirmation: 'coolguy55'
    )
  end

  let!(:song) do
    Song.create(
      title: "i miss the old Kanye",
      artist: "Kanye",
      image: "test image",
      user_id: user.id
    ) 
  end

  before do 
    sign_in user
  end

  describe "GET /index" do
    it "get a list of all the songs" do
      get '/songs' 
      song_response = JSON.parse(response.body)
      expect(song_response[0]["title"]).to eq "i miss the old Kanye"
    end
  end

  describe "POST /create" do
    it "create a song" do
      song_params = {
        song: {
          title: "create title",
          artist: "create artist",
          image: "create image",
          user_id: user.id
        }
      }
      post '/songs', params: song_params
      song_response = JSON.parse(response.body)
      expect(song_response["title"]).to eq "create title" 
    end
  end

  describe "PATCH /update" do
    it "create a song" do
      song_params = {
        song: {
          title: "Ultralight Beam",
          artist: "Kanye",
          image: "test image"
        }
      }
      
      patch "/songs/#{song.id}", params: song_params
      song_response = JSON.parse(response.body)
      expect(song_response["title"]).to eq "Ultralight Beam" 
    end
  end
end
  