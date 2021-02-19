import './App.css';
import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Resume from '../Resume/Resume'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import { Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <main className="App">
          <header>
            <NavBar />
          </header>
        <Route exact path='/' component={Home}/>
        <Route 
          exact path='/:page'
          render={ ( { match } ) => {
            if (match.params.page === 'projects') {
              return <Projects />
            } else if (match.params.page === 'resume') {
              return <Resume />
            } else if (match.params.page === 'contact') {
              return <Contact />
            }
          }}
        /> 
      </main>
    )

  }
}

export default App;
