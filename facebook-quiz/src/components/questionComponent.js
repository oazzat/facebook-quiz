import React, { Component } from 'react';

let questionComponent = (props)=> {
console.log(props.question)
//<button onClick={() => props.clickHandler()}>{props.question}</button>
return (
  <div>
  <h1>{props.question}</h1>
  <select onChange={() => props.clickHandler()}>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
 </select>
 </div>
)

}

export default questionComponent
