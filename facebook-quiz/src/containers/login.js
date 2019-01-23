import React, { Component } from 'react';
import Questions from './questions'
import LoginComponent from '../components/loginComponent.js'


class Login extends Component{

 state={
   loggedIn: false,
   error: 'Log In To Your Facebook Account!',
   username: "",
   password: "",
   currentUser: {},
   friendsList: []
 }


 login = (e) => {
   e.preventDefault()
   let username = this.state.username
   let password = this.state.password

   fetch('http://localhost:3000/api/v1/users', {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify({
       email: username,
       pass: password
     })
   })
   .then(resp => resp.json())
   .then(data => {
     if (data.status) {
         alert("Incorrect username or password")
     }
     else {
       console.log(data)
       this.setState({
         loggedIn:true,
         currentUser: data
       })
     }
   })
   .then( () => {
     console.log(this.state.currentUser);
     // debugger
     fetch(`http://localhost:3000/api/v1/users/${this.state.currentUser.data.id}`)
      .then(res => res.json())
      .then(data => this.setState({friendsList: data["data"]}))
   })


 }

 usernamechangeHandler=(e)=>{
   // console.log(e.target.value)
   this.setState({
     username: e.target.value
   })
 }

 passwordchangeHandler=(e)=>{
   this.setState({
     password: e.target.value
   })
 }

render(){

  if (!this.state.loggedIn){
  return(
  <div>
  <h3>{this.state.error}</h3>
  <form >
  <label>
    Email:
    <input onChange={this.usernamechangeHandler} type="text" name="name" value={this.state.username} />
  </label>
  <br></br>
  <label>
    Password:
    <input onChange={this.passwordchangeHandler} type="password" name="password" value={this.state.password}/>
  </label>
  <br></br>
  <input onClick= {(e)=> this.login(e)} type="submit" value="Log In!" />
</form>
  </div>
)
}
 else {
   console.log(this.state.friendsList);
   return <Questions
   currentUser= {this.state.currentUser}
   friendsList= {this.state.friendsList}
   />
   //also send the user id as a prop
 }
}

}



export default Login
