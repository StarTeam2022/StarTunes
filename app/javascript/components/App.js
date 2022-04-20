import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <Home />
      </>
    );
  }
}

export default App
