import React, { Component } from 'react';

let questionComponent = (props)=> {
console.log(props.question)
return (
  //<button onClick={() => props.clickHandler()}>{props.question}</button>
  <select onChange={() => props.clickHandler()}>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
 </select>
)

}

export default questionComponent
