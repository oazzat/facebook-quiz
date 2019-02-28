import React, { Component } from 'react';
import Questions from './questions'
import LoginComponent from '../components/loginComponent.js'
import ReactLoading from 'react-loading';



class Login extends Component{

 state={
   loggedIn: false,
   error: 'Log in to your facebook account to get started!',
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
       this.props.loggedIn()
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

  const Example = () => (
    <React.Fragment>
    <div style={{width: 700, align: 'center',textShadow: '2px 2px 2px #3A5998' }}>

    <h1 style={{color: '#3A5998',textShadow: '1px 1px white'}}>Connecting to Facebook...</h1>
    </div>

    <div style={{align: 'center'}}>
    <ReactLoading  type={'balls'} color={"#3A5998"} height={400} width={400} />
    </div>
    </React.Fragment>
);

 if (this.state.loading){
   return Example()
 }

  if (!this.state.loggedIn){
  return(
  // <div style={{backgroundColor: "red",textShadow: '5px 5px black', boxShadow: '0 0 5px 10px #555', opacity: .5}}>
  <div style={{color: '#3A5998',textShadow: '1px 1px white', width: '50%'}}>
  <h1>{this.state.error}</h1>
  <br></br>
  <form >
  <label >
    Email:<br></br>
    <input className="ui inp" onChange={this.usernamechangeHandler} type="text" name="name" value={this.state.username} />
  </label>
  <br></br><br/>
  <label>
    Password:<br></br>
    <input className="ui inp" onChange={this.passwordchangeHandler} type="password" name="password" value={this.state.password}/>
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
