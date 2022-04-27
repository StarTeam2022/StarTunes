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
      # creating a user 
      user = User.create(email: 'yolo@aol.com', password: 'coolguy55', password_confirmation: 'coolguy55')
      # checking if a user is signed in 
      sign_in user 
      # creating a song with a signed in user
      song_params = {
        song: {
        title: "i miss the old Kayne",
        artist: "Kayne"}
      }
      post '/songs', params: song_params
      song_response = JSON.parse(response.body)
      p song_response
      expect(song_response["title"]).to eq "i miss the old Kayne" #didnt use the index [0] since it wasnt returning an array
    end
  end

  describe "POST /create" do
    it "create a song" do
      # creating a user 
      user = User.create(email: 'yolo@aol.com', password: 'coolguy55', password_confirmation: 'coolguy55')
      # checking if a user is signed in 
      sign_in user 
      # creating a song with a signed in user
      song_params = {
        song: {
        title: "i miss the old Kayne",
        artist: "Kayne"}
      }
      
      post '/songs', params: song_params
      song_response = JSON.parse(response.body)
      p song_response
      expect(song_response["title"]).to eq "i miss the old Kayne" #didnt use the index [0] since it wasnt returning an array
    end
  end
end
  