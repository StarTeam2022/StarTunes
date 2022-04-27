import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import SongEdit from './pages/SongEdit'
import SongNew from './pages/SongNew'
import SongIndex from './pages/SongIndex'
import SongShow from './pages/SongShow'
import About from './pages/About'
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }
  componentDidMount() {
    this.readSong()
  }

  createSong = (newSong) => {
    fetch("/songs", {
      body: JSON.stringify(newSong),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => this.readSong())
      .catch(errors => console.log("Song create errors:", errors))
  }

  readSong = () => {
    fetch("/songs")
      .then(response => response.json())
      .then(payload => this.setState({ songs: payload }))
      .catch(errors => console.log("Song read errors:", errors))
  }

  updateSong = (updatedSong, id) => {
    fetch(`/songs/${id}`, {
      body: JSON.stringify(updatedSong),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH",
    })
      .then(response => response.json())
      .then(payload => this.readSong())
      .catch(errors => console.log(errors))
  }

  deleteSong = (id) => {
    fetch(`/songs/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then(response => response.json())
      .then(payload => this.readSong())
      .catch(errors => console.log(errors))
  }

  render() {
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/songindex"
            render={(props) => <SongIndex songs={this.state.songs} />}
          />
          <Route path="/songshow" component={SongShow} />
          <Route
            path="/SongNew"
            render={(props) => <SongNew createSong={this.createSong} />}
          />
          <Route
            path="/songedit/:id"
            render={(props) => {
              const id = props.match.params.id
              const song = this.state.songs.find(songObj => songObj.id === +id)
              return <SongEdit
                song={song}
                updateSong={this.updateSong}
                deleteSong={this.deleteSong}
              />
            }}
          />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App
