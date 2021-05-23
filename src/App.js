import React from 'react';
import './App.css';

import {HashRouter as Router, Switch, Route} from 'react-router-dom'

import {Header} from "./components/header/Header";
import {Home} from "./components/home/Home";
import {TutorialsMain} from "./components/tutorials/Tutorials-main";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path={'/tutorials'}>
            <TutorialsMain/>
          </Route>
          <Route path={"/"}>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
