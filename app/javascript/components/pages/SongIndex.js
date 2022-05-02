import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

class SongIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deleted: false
    }
  }

  handleDelete = () => {
    this.props.deleteSong(this.props.song.id)
    this.setState({ deleted: true })
  }

  render() {
    return (
      <div className="playlist-background">
        <h1 className='playlist-title'>My Songs</h1>
        <div>
          {this.props.songs &&
            this.props.songs.map((song) => {
              return (
                <div> 
                <div className='playlist'>
                <div className='playlist-card'>
                  <Card sx={{ display: 'flex', width: 400, height: 200}} key={song.id}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: 300}}>
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                          <div>{song.title}</div>
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          <div>{song.artist}</div>
                        </Typography>
                      </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                      <NavLink to={`/songedit/${song.id}`}>
                        <Button color="primary">
                          edit/delete
                        </Button> 
                      </NavLink>
                    </Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 200 }}
                      image={song.image}
                      alt="cover art"
                    />
                  </Card>
                </div>
                </div>
                </div>
              )
            })}
        </div>
      </div>
      );
    }
  }
  
  export default SongIndex;
