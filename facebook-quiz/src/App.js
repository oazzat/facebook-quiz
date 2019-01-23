import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, withRouter} from "react-router-dom"
import Login from './containers/login.js';
import HighScoreComponent from "./components/highScoreComponent"

//fetch

// login

// qestins
// <Route path="/" component={Login} />
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        <Login/>


        </header>
      </div>
    );
  }
}

// <Switch>
// <Route path="/high" component={HighScoreComponent} />
// <Route path="/" component={Login} />
// </Switch>

export default App;
