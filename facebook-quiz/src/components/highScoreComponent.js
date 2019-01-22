import React, { Component } from 'react';

let highScoreComponent= () => {
return(
  <div>
  <h3>HighScore!</h3>
  {setTimeout(function() {window.location.reload()}, 2000)}
  </div>
)
}

export default highScoreComponent
