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

  describe "DESTROY /delete" do
    it "destroys a song" do
      delete "/songs/#{song.id}"
      song_response = JSON.parse(response.body)
      songs = Song.all
      expect(songs).to be_empty 
    end
  end
end

describe 'no invalid params' do
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

  it 'does not create a song without a title' do
    song_params = {
      song: {
        artist: 'testing artist',
        image: 'testing image'
      }
    }
    post '/songs', params: song_params
    json = JSON.parse(response.body)
    expect(json['title']).to_not be_empty 
  end

  it 'does not create a song without a artist' do
    song_params = {
      song: {
        title: 'testing title',
        image: 'testing image'
      }
    }
    post '/songs', params: song_params
    json = JSON.parse(response.body)
    expect(json['artist']).to_not be_empty 
  end

  it 'does not create a song without a image' do
    song_params = {
      song: {
        title: 'testing title',
        artist: 'testing artist'
      }
    }
    post '/songs', params: song_params
    json = JSON.parse(response.body)
    expect(json['image']).to_not be_empty 
  end

  it 'does not update a song with empty artist' do
    song_params = {
      song: {
        title: 'testing title',
        image: 'testing image'
      }
    }
    patch "/songs/#{song.id}", params: song_params
    json = JSON.parse(response.body)
    expect(json['artist']).to_not be_empty 
  end

  it 'does not update a song with empty title' do
    song_params = {
      song: {
        artist: 'testing artist',
        image: 'testing image'
      }
    }
    patch "/songs/#{song.id}", params: song_params
    json = JSON.parse(response.body)
    expect(json['title']).to_not be_empty 
  end

  it 'does not update a song with empty title' do
    song_params = {
      song: {
        artist: 'testing artist',
        title: 'testing title'
      }
    }
    patch "/songs/#{song.id}", params: song_params
    json = JSON.parse(response.body)
    expect(json['title']).to_not be_empty 
  end

  it 'does not update a song with a title less than 2 characters' do
    song_params = {
      song: {
        artist: 't',
        title: 'testing title'
      }
    }
    patch "/songs/#{song.id}", params: song_params
    json = JSON.parse(response.body)
    expect(json['artist']).to include 'is too short (minimum is 2 characters)'
  end

  it 'does not update a song with a title less than 2 characters' do
    song_params = {
      song: {
        artist: 'testing artist',
        title: 't'
      }
    }
    patch "/songs/#{song.id}", params: song_params
    json = JSON.parse(response.body)
    expect(json['title']).to include 'is too short (minimum is 2 characters)'
  end

  it 'does not create a song without invalid validations' do
    song_params = {
      song: {
        title: 't',
        artist: 'testing artist'
      }
    }
    post '/songs', params: song_params
    json = JSON.parse(response.body)
    expect(json['title']).to include 'is too short (minimum is 2 characters)'
  end

  it 'does not create a song without invalid validations' do
    song_params = {
      song: {
        title: 'testing title',
        artist: 't'
      }
    }
    post '/songs', params: song_params
    json = JSON.parse(response.body)
    expect(json['artist']).to include 'is too short (minimum is 2 characters)'
  end
end
