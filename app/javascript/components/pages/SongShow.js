import React, { Component } from 'react'
import randomSongs from '../MockSongs'
import { ImShuffle } from 'react-icons/im'

export class SongShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: randomSongs
    }
  }
  
  handleChange = () => {
    const randSongs = randomSongs(Math.floor(Math.random() * randomSongs.length))
  }

  render() {
    return (
      <>
      <div className="index-name">
        <ImShuffle />
        <p>{this.state.songs.map(item => 
          item.title)}</p>
          <p>{this.handleChange}</p>
      </div>
      </>
    )
  }
}

export default SongShow
