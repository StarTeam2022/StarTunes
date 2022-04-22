require 'rails_helper'

RSpec.describe "Songs", type: :request do
  describe "GET /index" do
    it "get a list of all the songs" do
      user = User.create(email: 'yolo@aol.com', password: 'coolguy55', password_confirmation: 'coolguy55')
      song = user.songs.create!(
      title: "i miss the old Kayne",
      artist: "Kayne"
    )  
    get '/songs' 
    song_response = JSON.parse(response.body)
    p song_response
    expect(song_response[0]["title"]).to eq "i miss the old Kayne"
    end
  end

    describe "POST /create" do
      it "create a song" do
        user = User.create(email: 'yolo@aol.com', password: 'coolguy55', password_confirmation: 'coolguy55')
        sign_in user
        song_params = {
          song: {
          title: "i miss the old Kayne",
          artist: "Kayne"}
      }
          
        
        post '/songs', params: song_params
        song_response = JSON.parse(response.body)
        p song_response
        expect(song_response[0]["title"]).to eq "i miss the old Kayne"
      end
    end
end
  