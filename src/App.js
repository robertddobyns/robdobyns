import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {Header} from "./components/header/Header";
import {Home} from "./components/home/Home";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path={"/"}>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
