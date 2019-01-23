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
  qqs:[],
  scoreId: "",
  correct: 0,
  total: 0
}

componentDidMount(){
  console.log("TEST");
  this.sepList()
  fetch("http://localhost:3000/api/v1/scores")
    .then(res => res.json())
    .then(scores => {
      let temp = {}
      scores["data"].forEach(score =>{
        console.log(score.attributes["user-id"]);
        console.log( this.props.currentUser["data"].id);
        if (score.attributes["user-id"] == this.props.currentUser["data"].id){
          this.setState({total: score.attributes.total, correct: score.attributes.correct, scoreId: score.id})

        }

      })
      // this.setState({score: temp},console.log("STATE",this.state))
  })

}

// componentWillUpdate = () =>{
//   fetch(`http://localhost:3000/api/v1/scores/${this.state.scoreId}`,{
//     method: "PATCH",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({attributes: {correct: this.state.correct,total: this.state.total}})
//   })
//   .then(res => res.json())
//   .then(score => console.log("THE SCORE",score))
// }

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
  },()=>console.log(this.state))
}

updateScore = (addOrSub) =>{
  let newTot = this.state.total
  let newCor = this.state.correct
  if (addOrSub === "+"){
    newCor = newCor + 1
    newTot = newTot + 1
  }
  else if (addOrSub === "-"){
    newTot = newTot + 1
  }

  fetch(`http://localhost:3000/api/v1/scores/${this.state.scoreId}`,{
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({attributes: {correct: newCor,total: newTot}})
  })
  .then(res => res.json())
  .then(score => this.setState({total: newTot, correct: newCor}))
}

makeQuestions = () =>{

  let bqs = this.state.birthdayList.map(friend =>{
    return <QuestionComponent key={friend.attributes.id} updateScore={this.updateScore} friend={friend} allFriends={this.props.friendsList} choices={this.state.birthdayList} type={QUESTIONS.birthday}/>
  })

  let cqs = this.state.currentCityList.map(friend =>{
    return <QuestionComponent key={friend.attributes.id} updateScore={this.updateScore} friend={friend}  allFriends={this.props.friendsList} choices={this.state.currentCityList} type={QUESTIONS.currentCity}/>
  })

  let hqs = this.state.homeTownList.map(friend =>{
    return <QuestionComponent key={friend.attributes.id} updateScore={this.updateScore} friend={friend}  allFriends={this.props.friendsList} choices={this.state.homeTownList} type={QUESTIONS.homeTown}/>
  })

  let qqs = this.state.quoteList.map(friend =>{
    return <QuestionComponent key={friend.attributes.id} updateScore={this.updateScore} friend={friend}  allFriends={this.props.friendsList} choices={this.state.quoteList} type={QUESTIONS.quote}/>
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
console.log("LITSSSS",this.props.friendsList)
  return(
    <div >
    <div>
    <h1>Welcome to the facebook quiz app!</h1>
    <h2>Total: {this.state.total} Correct:{this.state.correct}</h2>
    <button onClick={()=>{this.sepList(); this.makeQuestions()}}>Click to get started</button>
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
