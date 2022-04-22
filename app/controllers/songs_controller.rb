class SongsController < ApplicationController
 def index
    songs = Song.all
    render json: songs
  end
  def create 
    create_song = current_user.songs.create(song_params)
    if create_song.valid? 
        render json: create_song
    else 
        render json: create_song.errors
    end
  end 

  def new
  end

  private
  
  def song_params
    params.require(:song).permit(:title, :artist)
  end

end
