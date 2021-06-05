import './App.css';
import React from 'react';
import {Component} from 'react';
import FormComponent from './Component/formComponent'
import Login from './Component/loginForm'
class App extends Component{
  constructor(){
    super();
    this.state ={
      txnId : null,
      token : null,
    };
  }

  getOtp = async (e) =>{
    e.preventDefault();
    const mobileNumber = e.target.elements.mobNo.value;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "mobile":`${mobileNumber}`})
  };
  const api_call = await fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', requestOptions);
  const response = await api_call.json();
  this.setState({txnId:response.txnId});
  console.log(response, this.state.txnId);
  }

  login = async (e) =>{
    e.preventDefault();
    const otp = e.target.elements.otp.value;
    const requestOptions = {
      method: 'POST',   
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "otp":`${otp}`,
      "txnId": `${this.state.txnId}`
    })
  };
  const api_call = await fetch('https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP', requestOptions);
  const response = await api_call.json();
  this.setState({token:response.token});
  console.log(response, this.state.token);
  }
  
  render(){
    const {txnId} = this.state;
    return (
      <div className="App">{!txnId && 
      <FormComponent getOtp={this.getOtp}></FormComponent>}  
      {txnId && <Login login={this.login}></Login>} 
      </div>
    );
  };
 }

export default App;
