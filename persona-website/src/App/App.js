import './App.css';
import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Hey, I'm Kelsie</h1>
        <About />
      </div>
    )

  }
}

export default App;
