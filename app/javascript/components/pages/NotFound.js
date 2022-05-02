import React, { Component } from 'react'
import space404 from '../assets/space404.jpeg'

export class NotFound extends Component {
  render() {
    return (
      <div className="notFound">
        <div id="foundPic">
          <img className='space404' src={space404} alt="404 not found image" />
        </div>
      </div>
    );
  }
}

export default NotFound
