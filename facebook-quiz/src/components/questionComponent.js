import React, { Component } from 'react';


class QuestionComponent extends Component {
// console.log(this.props)
//<button onClick={() => this.props.clickHandler()}>{this.props.question}</button>

checkAnswer = (e) =>{
  e.persist()
  if (e.target.id === this.props.friend.id){
    e.target.parentElement.style.backgroundColor = 'green'
    setTimeout((e)=>{
      this.props.updateScore("+")
      e.target.parentElement.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    }, 1000,e)
  }
    else{
      document.getElementById(this.props.friend.id).parentElement.style.backgroundColor = 'green'
      e.target.parentElement.style.backgroundColor = 'red'
      setTimeout((e)=>{
        this.props.updateScore("-")
        e.target.parentElement.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
        document.getElementById(this.props.friend.id).parentElement.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
      }, 1000,e)
    }
}

makeChoices = () =>{
  let allChoices = []
  allChoices.push(this.props.friend)

  while (allChoices.length<4){
  let temp = this.props.allFriends[Math.floor(Math.random()*this.props.allFriends.length)]
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

  // const checkAnswer = (e) =>{
  //   // debugger
  //   if (e.target.id === this.props.friend.id){
  //     e.target.parentElement.style.backgroundColor = 'green'
  //     setTimeout(()=>{
  //       this.props.updateScore("+")
  //     }, 2000)
  //   }
  //     else{
  //       this.props.updateScore("-");
  //     }
  // }

  return ([
    <div className="grid-item" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
    <h3 style={{color: '#2096F3'}}>{newArr[0].attributes.name}</h3>
    <img src={newArr[0].attributes.img} alt="NO PICTURE AVAILABLE"/>
    {console.log("IMAGE",newArr[0].attributes.img)}
    <br></br>
    <button id={newArr[0].id} onClick={this.checkAnswer}>Pick me!</button>
    </div>,

    <div className="grid-item" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
    <h3 style={{color: '#2096F3'}}>{newArr[1].attributes.name}</h3>
    <img src={newArr[1].attributes.img} alt="NO PICTURE AVAILABLE"/>
    {console.log("IMAGE",newArr[1].attributes.img)}

    <br></br>
    <button id={newArr[1].id} onClick={this.checkAnswer}>Pick me!</button>
    </div>,

    <div  className="grid-item" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
    <h3 style={{color: '#2096F3'}}>{newArr[2].attributes.name}</h3>
    <img src={newArr[2].attributes.img} alt="NO PICTURE AVAILABLE"/>
    {console.log("IMAGE",newArr[2].attributes.img)}

    <br></br>
    <button id={newArr[2].id} onClick={this.checkAnswer}>Pick me!</button>
    </div>,

    <div className="grid-item" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
    <h3 style={{color: '#2096F3'}}>{newArr[3].attributes.name}</h3>,
    <img src={newArr[3].attributes.img} alt="NO PICTURE AVAILABLE"/>
    {console.log("IMAGE",newArr[3].attributes.img)}

    <br></br>
    <button id={newArr[3].id} onClick={this.checkAnswer}>Pick me!</button>
    </div>
  ])

}

displayHeading = () =>{
  if (this.props.type.includes("birthday")){
    return (<span style={{textShadow: '1px 1px white',color: 'black'}}><h4>{this.props.type}</h4> <h5>{this.props.friend.attributes.birthday}</h5></span>)
  }
  else if (this.props.type.includes("current")){
    return (<span style={{textShadow: '1px 1px white',color: 'black'}}><h4>{this.props.type}</h4> <h5>{this.props.friend.attributes["current-city"]}</h5></span>)
  }
  else if (this.props.type.includes("quote")){
    return (<span style={{textShadow: '1px 1px white',color: 'black'}}><h4>{this.props.type}</h4> <h5 style={{width: '1000px', margin: '0 auto'}}>{this.props.friend.attributes.quote}</h5></span>)
  }
  else if(this.props.type.includes("hometown")){
    return (<span style={{textShadow: '1px 1px white',color: 'black'}}><h4>{this.props.type}</h4> <h5>{this.props.friend.attributes.hometown}</h5></span>)
  }

}
render(){
return (
  <div>
      <div>
      <h4>{this.displayHeading()}</h4>
      </div>

      <div className="grid-container">
      {this.makeChoices()}
      </div>
 </div>
)
}

}

export default QuestionComponent
