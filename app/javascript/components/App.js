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

class App extends React.Component {
  render() {
    return (
      <>
        <Header {...this.props} />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/songindex" component={SongIndex} />
            <Route path="/songshow" component={SongShow} />
            <Route path="/songnew" component={SongNew} />
            <Route path="/songedit" component={SongEdit} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>

      </>
    );
  }
}

export default App
