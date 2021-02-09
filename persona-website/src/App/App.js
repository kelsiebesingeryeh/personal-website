import './App.css';
import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Resume from '../Resume/Resume'
// import About from '../About/About'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

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
