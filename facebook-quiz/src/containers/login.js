import React, { Component } from 'react';
import Questions from './questions'
import LoginComponent from '../components/loginComponent.js'
import ReactLoading from 'react-loading';



class Login extends Component{

 state={
   loggedIn: false,
   error: 'Log In To Your Facebook Account!',
   username: "",
   password: "",
   currentUser: {},
   friendsList: [],
   loading: false
 }


 login = (e) => {
   e.preventDefault()
   let username = this.state.username
   let password = this.state.password

   this.setState({
     loading: true
   })

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
         this.setState({
           loading: false
         })
     }
     else {
       console.log(data)
       this.setState({
         loggedIn:true,
         currentUser: data,
         loading: false
       })
       fetch(`http://localhost:3000/api/v1/users/${this.state.currentUser.data.id}`)
        .then(res => res.json())
        .then(data => this.setState({friendsList: data["data"]}))
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

  const Example = ({ type, color }) => (
    <div style={{display: "flex", align: "center", flexDirection: "row" }}>

    <h1>Connecting to Facebook...</h1><br></br>
    <ReactLoading type={type} color={"blue"} height={'100%'} width={'100%'} />

    </div>
);

 if (this.state.loading){
   return Example("balls", "#ffffff")
 }

  if (!this.state.loggedIn){
  return(
  <div style={{ color: 'black' }}>
  <h1>{this.state.error}</h1>
  <form >
  <label>
    Email:
    <input className="ui input" onChange={this.usernamechangeHandler} type="text" name="name" value={this.state.username} />
  </label>
  <br></br><br/>
  <label>
    Password:
    <input className="ui input" onChange={this.passwordchangeHandler} type="password" name="password" value={this.state.password}/>
  </label>
  <br></br><br/>
  <input className="ui button" onClick= {(e)=> this.login(e)} type="submit" value="Login" />
</form>
  </div>
)
}
 else {
   return <Questions
   currentUser= {this.state.currentUser}
   friendsList= {this.state.friendsList}
   />
   //also send the user id as a prop
 }
}

}



export default Login
