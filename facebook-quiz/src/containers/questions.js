import React, { Component } from 'react';
import QuestionComponent from '../components/questionComponent.js';
import HighScore from './highScore'

const QUESTIONS = {
  birthday: "My birthday is: ",
  currentCity: "My current city is: ",
  homeTown: "My hometown is: ",
  quote: "My favorite quote is: "
}


class Questions extends Component {

state={
  birthdayList: [],
  currentCityList: [],
  homeTownList: [],
  quoteList: [],
  bqs:[],
  cqs:[],
  hqs:[],
  qqs:[]
}

componentDidMount = () =>{
  this.sepList()
}


sepList = () =>{
  let bArr = []
  let cArr = []
  let hArr = []
  let qArr = []
  this.props.friendsList.forEach(friend =>{
    // console.log(friend);
    if (friend.attributes.birthday != null){bArr.push(friend)}
    if (friend.attributes["current-city"] != null){cArr.push(friend)}
    if (friend.attributes.hometown != null){hArr.push(friend)}
    if (friend.attributes.quote != null){qArr.push(friend)}
  })
  this.setState({
    birthdayList: bArr,
    currentCityList: cArr,
    homeTownList: hArr,
    quoteList: qArr
  })
}

makeQuestions = () =>{

  let bqs = this.state.birthdayList.map(friend =>{
    return <QuestionComponent key={friend.attributes.id} friend={friend} allFriends={this.props.friendsList} choices={this.state.birthdayList} type={QUESTIONS.birthday}/>
  })

  let cqs = this.state.currentCityList.map(friend =>{
    return <QuestionComponent key={friend.attributes.id} friend={friend}  allFriends={this.props.friendsList} choices={this.state.currentCityList} type={QUESTIONS.currentCity}/>
  })

  let hqs = this.state.homeTownList.map(friend =>{
    return <QuestionComponent key={friend.attributes.id} friend={friend}  allFriends={this.props.friendsList} choices={this.state.homeTownList} type={QUESTIONS.homeTown}/>
  })

  let qqs = this.state.quoteList.map(friend =>{
    return <QuestionComponent key={friend.attributes.id} friend={friend}  allFriends={this.props.friendsList} choices={this.state.quoteList} type={QUESTIONS.quote}/>
  })

    this.setState({bqs,cqs,hqs,qqs})
}

displayQuest = () =>{
  let newArrr = [
  this.state.bqs[Math.floor(Math.random()*this.state.bqs.length)],
  this.state.cqs[Math.floor(Math.random()*this.state.cqs.length)],
  this.state.hqs[Math.floor(Math.random()*this.state.hqs.length)],
  this.state.qqs[Math.floor(Math.random()*this.state.qqs.length)]
  ]

return newArrr[Math.floor(Math.random()*4)]
}

render(){
  // console.log(this.state);
  // setTimeout(3000)
  console.log("props",this.props);
  // console.log(this.props.friendsList[0]);
  // debugger
  console.log("state",this.state)
// <img src={this.props.friendsList[5].attributes.img}/>
  return(
    <div>
    <div onClick={()=>{this.sepList(); this.makeQuestions()}}>
    <h1>Welcome to the facebook quiz app! Click to get started!</h1>
    </div>
    <div>
    {this.displayQuest()}
    </div>
    </div>
  )
}

// render(){
//   if (this.state.queue < 6){
//     return (
//       <QuestionComponent
//       question ={this.questions[this.state.queue]()}
//       clickHandler={this.incrementQueue}
//       />
//     )
// }
// else {
//   return(
//   <HighScore/>
// )
// }
//
// }

}

export default Questions
