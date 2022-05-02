require 'rails_helper'

RSpec.describe Song, type: :model do

  
  describe 'validations' do
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

    describe 'presence' do
      it 'requires artist' do
        song.artist = ''
        song.save
        expect(song.valid?).to be_falsey
      end
      it 'requires image' do
        song.image = ''
        song.save
        expect(song.valid?).to be_falsey
      end
      it 'requires title' do
        song.title = ''
        song.save
        expect(song.valid?).to be_falsey
      end
    end

    describe 'length' do 
      it 'requires title' do
        song.title = 't'
        song.save
        expect(song.valid?).to be_falsey
      end
      it 'requires artist' do
        song.artist = 't'
        song.save
        expect(song.valid?).to be_falsey
      end
      it 'requires image' do
        song.image = 't'
        song.save
        expect(song.valid?).to be_falsey
      end
    end

    describe 'title with artist' do
      it 'validates unique title with scope artist' do
        song = Song.create(
          title: "i miss the old Kanye",
          artist: "Ye",
          image: "test image",
          user_id: user.id
        )
        expect(song.valid?).to be_truthy
      end
    end
  end

end
