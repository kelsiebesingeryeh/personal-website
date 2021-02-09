import './App.css';
import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Resume from '../Resume/Resume'
import Home from '../Home/Home'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <main className="App">
        <NavBar />
        <div className='content'>
          <h1 className='h1Animation skateIn'>Hey, I'm Kelsie</h1>
        </div>
        {/* <About /> */}
        <Resume />
      </main>
    )

  }
}

export default App;
