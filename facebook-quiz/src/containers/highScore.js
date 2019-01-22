import React, { Component } from 'react';
import HighScoreComponent from '../components/highScoreComponent'

class HighScore extends Component{


// fetch data about all users and their highest score 
render(){


  return(
    <div>
    <HighScoreComponent/>

    </div>
  )
}


}



export default HighScore

//extras
// {setTimeout(function() {window.location.reload()}, 2000)}
