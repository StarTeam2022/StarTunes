import React, { Component } from 'react'
import playButton from '../assets/playButton.png'

export class Home extends Component {
  render() {
    return (
      <div className='home-page'>
        <h1 id="home-header" className="index-name">
          TIRED OF THE SAME OLD SONGS, LET'S VIBE OUT!
        </h1>
        <a href="/songShow">
          <img id="play-image" src={playButton} alt="playButton" />
        </a>
      </div>
    );
  }
}

export default Home
