import React, { Component } from 'react';


const questionComponent = (props)=> {
console.log(props)
//<button onClick={() => props.clickHandler()}>{props.question}</button>


const makeChoices = () =>{
  let allChoices = []
  allChoices.push(props.friend)

  while (allChoices.length<4){
  let temp = props.allFriends[Math.floor(Math.random()*props.allFriends.length)]
  if (!allChoices.includes(temp)){
    allChoices.push(temp)
  }
  }

  let newArr = []
  while (newArr.length<4){
    let temp2 = allChoices[Math.floor(Math.random()*allChoices.length)]
    if (!newArr.includes(temp2)){
      newArr.push(temp2)
    }
  }

  const checkAnswer = (e) =>{
    if (e.target.id === props.friend.id){
      props.updateScore("+")}
      else{
        props.updateScore("-");
      }
  }

  return ([

    <h3>{newArr[0].attributes.name}</h3>,
    <img src={newArr[0].attributes.img} alt="NO PICTURE AVAILABLE"/>,
    <br></br>,
    <button id={newArr[0].id} onClick={checkAnswer}>Pick me!</button>,

    <h3>{newArr[1].attributes.name}</h3>,
    <img src={newArr[1].attributes.img} alt="NO PICTURE AVAILABLE"/>,
    <br></br>,
    <button id={newArr[1].id} onClick={checkAnswer}>Pick me!</button>,

    <h3>{newArr[2].attributes.name}</h3>,
    <img src={newArr[2].attributes.img} alt="NO PICTURE AVAILABLE"/>,
    <br></br>,
    <button id={newArr[2].id} onClick={checkAnswer}>Pick me!</button>,

    <h3>{newArr[3].attributes.name}</h3>,
    <img src={newArr[3].attributes.img} alt="NO PICTURE AVAILABLE"/>,
    <br></br>,
    <button id={newArr[3].id} onClick={checkAnswer}>Pick me!</button>,
  ])

}

const displayHeading = () =>{
  if (props.type.includes("birthday")){
    return <h4>{props.type + props.friend.attributes.birthday}</h4>
  }
  else if (props.type.includes("current")){
    return <h4>{props.type + props.friend.attributes["current-city"]}</h4>
  }
  else if (props.type.includes("quote")){
    return <h4>{props.type + props.friend.attributes.quote}</h4>
  }
  else if(props.type.includes("hometown")){
    return <h4>{props.type + props.friend.attributes.hometown}</h4>
  }

}

return (
  <div>
  <h4>{displayHeading()}</h4>

  {makeChoices()}
 </div>
)

}

export default questionComponent
