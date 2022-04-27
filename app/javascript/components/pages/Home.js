import React, { Component } from 'react'
import playButton from '../assets/playButton.png'

export class Home extends Component {
  render() {
    return (
      <div>
        <h1 id="home-header" className="index-name">
          TIRED OF THE SAME OLD SONGS, LET'S VIBE OUT!</h1>
        <img id="play-image" src={playButton} alt="playButton"/>
      </div>
    );
  }
}

export default Home
