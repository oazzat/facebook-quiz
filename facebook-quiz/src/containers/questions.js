import React, { Component } from 'react';
import QuestionComponent from '../components/questionComponent.js';
import HighScore from './highScore'



class Questions extends Component {

state={
  queue: 1,
  user_data: this.props.user_data
  //the entire object with all the data for the specific user
  //a user id
}




componentDidMount(){
  console.log(this.state.user_data)
}

questions={
1:function (){
return "question1"
},
2:function (){
return "question2"
},
3:function (){
return "question3"
},
4:function (){
return "question4"
},
5:function (){
return "question5"
}
}

//methods


incrementQueue= ()=> {
this.setState({queue: this.state.queue + 1})
}



render(){
  if (this.state.queue < 6){
    return (
      <QuestionComponent
      question ={this.questions[this.state.queue]()}
      clickHandler={this.incrementQueue}
      />
    )
}
else {
  return(
  <HighScore/>
)
}

}

}

export default Questions
