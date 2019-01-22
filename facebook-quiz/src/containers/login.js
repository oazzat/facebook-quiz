import React, { Component } from 'react';
import Questions from './questions'
import LoginComponent from '../components/loginComponent.js'


class Login extends Component{

 state={
   login: false,
   error: 'Please Log In',
   username: "",
   password: ""
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
       this.setState({
         error: "incorrect username or password"
       })
     }
     else {
       console.log(data)
       this.setState({
         login:true,
         user_data: data
       })
     }
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

  if (!this.state.login){
  return(
  <div>
  <h3>{this.state.error}</h3>
  <form >
  <label>
    Name:
    <input onChange={this.usernamechangeHandler} type="text" name="name" value={this.state.username} />
  </label>
  <label>
    Password:
    <input onChange={this.passwordchangeHandler} type="password" name="password" value={this.state.password}/>
  </label>
  <input onClick= {(e)=> this.login(e)} type="submit" value="Login" />
</form>
  </div>
)
}
 else {
   return <Questions
   user_data= {this.state.user_data}
   />
   //also send the user id as a prop
 }
}

}



export default Login
