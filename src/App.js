import './App.css';
import React from 'react';
import {Component} from 'react';
import FormComponent from './Component/formComponent'
class App extends Component{
  constructor(){
    super();
    this.state ={
      txnId : "",
    };
  }

<<<<<<< Updated upstream
function App() {
  return (
    <div className="App">
      Get Vaccinated
    </div>
  );
}
=======
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
  
  render(){
    return (
      <div className="App">
      <FormComponent getOtp={this.getOtp}></FormComponent>      
      </div>
    );
  };
 }
>>>>>>> Stashed changes

export default App;
