/* eslint no-else-return: "error" */

import './App.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const App = () => {
  return (
    <main className="App">
      <div className="mainPageContainer">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </main>
  );
};

export default App;
