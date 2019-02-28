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

  state = {
    loIn: false
  }



  render() {
    return (
      <React.Fragment>
            <div className="App">

              <header className="App-header" >
              {this.state.loIn?null:<div><h1 style={{color: 'white',fontSize: '70px',textShadow: '2px 2px 2px #3A5998'}}>Welcome to the Facebook Friends Quiz!</h1><br></br></div>}
              <Login loggedIn={()=>this.setState({loIn: true})}/>


              </header>
            </div>
      </React.Fragment>
    );
  }
}

// Following was in between line 18 and 19
// <div style={{ backgroundImage: "https://cdn.vox-cdn.com/thumbor/KksSTPxukuuyrCHq1bnKlYdzYl8=/0x0:2040x1360/1820x1213/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59172625/mdoying_180118_2249_facebook_0445stills_3.0.jpg"}} className="App">


// <Switch>
// <Route path="/high" component={HighScoreComponent} />
// <Route path="/" component={Login} />
// </Switch>

export default App;
