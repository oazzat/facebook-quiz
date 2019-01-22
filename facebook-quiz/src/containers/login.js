import React, { Component } from 'react';
import Questions from './questions'
import LoginComponent from '../components/loginComponent.js'


class Login extends Component{

 state={
   login: false,
   error: 'Please Log In'
 }


 login = (e) => {
   // make a fetch request and psot credentials, response would tell if success or not.
   this.setState({
     login:true
   })
   console.log(e.target)
 }

render(){

  if (!this.state.login){
  return(
  <div>
  <h3>{this.state.error}</h3>
  <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    Password:
    <input type="password" name="password" />
  </label>
  <input onClick= {(e)=> this.login(e)} type="submit" value="Login" />
</form>
  </div>
)
}
 else {
   return <Questions/>
   //also send the user id as a prop
 }
}

}



export default Login
