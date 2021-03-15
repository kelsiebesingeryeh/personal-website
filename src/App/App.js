import './App.scss';
import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Resume from '../Resume/Resume'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import { Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <main className="App">
        <div className="mainPageContainer">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/:page"
              render={({ match }) => {
                if (match.params.page === "projects") {
                  return <Projects />
                } else if (match.params.page === "contact") {
                  return <Contact />
                } else if (match.params.page === "/") {
                  return <Home />
                }
              }}
            />
          </Switch>
        </div>
      </main>
    );

  }
}

export default App;


// else if (match.params.page === "resume") {
//                   return <Resume />