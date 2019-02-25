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
      <div style={{ backgroundImage: "https://cdn.vox-cdn.com/thumbor/KksSTPxukuuyrCHq1bnKlYdzYl8=/0x0:2040x1360/1820x1213/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59172625/mdoying_180118_2249_facebook_0445stills_3.0.jpg"}} className="App">
        <header className="App-header" >

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
