import React, { Component } from 'react'
import randomSongs from '../MockSongs'


export class SongShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: randomSongs,
      randomSong: ""
    }
  }


  handleChange = () => {
    let randSongs = this.state.songs[(Math.floor(Math.random() * this.state.songs.length))]
    this.setState({ randomSong: randSongs })
  }

  render() {
    return (
      <>
        <div className="randomButton">
          <button onClick={this.handleChange}>Click for a Song!</button>
        </div>
        <div className="index-name">
          <p>{this.state.randomSong.title}</p>
          <p>{this.state.randomSong.artist}</p>
        </div>
      </>
    )
  }
}

export default SongShow
