import React, { Component } from 'react'
import mixtape from '../assets/mixtape.png'

export class Home extends Component {
  render() {
    return (
      <div className='home-page'>
        <h1 id="home-header" className="index-name">
          TIRED OF THE SAME OLD SONGS, LET'S VIBE OUT!
        </h1>
        <a href="/songShow">
          <img id="play-image" src={mixtape} alt="playButton" />
        </a>
      </div>
    );
  }
}

export default Home
