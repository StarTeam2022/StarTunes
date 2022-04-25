class SongsController < ApplicationController

  def index
    songs = current_user.songs.order(created_at: :desc)
    render json: songs.as_json(include: [:user])
  end
  
  def create 
    create_song = current_user.songs.create(song_params)
    if create_song.valid? 
        render json: create_song
    else 
        render json: create_song.errors
    end
  end 

  def update
    song = current_user.songs.update(song_params)
    render json: song
  end

  def delete
    song = current_user.songs.find(params[:id])
    if song.destroy
      render json: song
    else 
      render json: song.errors
    end
  end

  private
  
  def song_params
    params.require(:song).permit(:title, :artist)
  end

end
