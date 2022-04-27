class RenameImageUrlToImageInSongs < ActiveRecord::Migration[7.0]
  def change
    rename_column :songs, :image_url, :image
  end
end
