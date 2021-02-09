import './App.css';
import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Resume from '../Resume/Resume'
import Home from '../Home/Home'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <main className="App">
        <NavBar />
        <Route exact path='/' component={Home}/>
        <Route 
          exact path='/:page'
          render={ ( { match } ) => {
            let specificPage
            if (match.params.page === 'work') {
              return <Work />
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
