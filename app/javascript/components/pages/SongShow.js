import React, { Component } from 'react'
import randomSongs from '../MockSongs'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import startunes from '../assets/startunes.png'


export class SongShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: randomSongs,
      randomSong: "",
      open: false
    }
  }


  handleChange = () => {
    let randSongs = this.state.songs[(Math.floor(Math.random() * this.state.songs.length))]
    this.setState({ randomSong: randSongs })
    this.setState({ open: true})
  }

  render() {
    return (
      <div className="songShow">
        <div className="songRandom">
          <div className="show-title">
          {!this.state.open && <h1 className='text-title'>Click the button to see a randomized song from our database</h1>}
          <div className="show-img">
          {!this.state.open && <img className='img-show' src={startunes} alt='img'></img>}
          </div>
          </div>
        {this.state.open && <Card className='songCardShow'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              width="200"
              image={this.state.randomSong.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <p>{this.state.randomSong.title}</p>
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <p>{this.state.randomSong.artist}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>}
        </div>
        <div className="randomButton">
          <Button sx={{color: 'black'}} variant="contained" onClick={this.handleChange}>Random</Button>
        </div>
      </div>
    )
  }
}

export default SongShow
