import './App.css';
import React from 'react';
import { Component } from 'react';
import FormComponent from './Component/formComponent'
import Login from './Component/loginForm'
import { sha256 } from 'js-sha256';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      txnId: null,
      token: null,
    };
  }

  getOtp = async (e) => {
    e.preventDefault();
    const mobileNumber = e.target.elements.mobNo.value;
    const requestOptions = {
      mobile: mobileNumber
    };
    axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', requestOptions).then(response => {
      this.setState({ txnId: response.data.txnId });
    }).catch(err => {
      console.log(err)
    });
  }

  login = async (e) => {
    e.preventDefault();
    const otp = e.target.elements.otp.value;
    const cnfOTPPayload = {
      otp: sha256(otp),
      txnId: this.state.txnId
    };
    axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP', cnfOTPPayload).then(response => {
      this.setState({ token: response.token });
    }).catch(err => {
      console.log(err)
    });
  }

  render() {
    const { txnId } = this.state;
    return (
      <div className="App">
        {!txnId && <FormComponent getOtp={this.getOtp}></FormComponent>}
        {txnId && <Login login={this.login}></Login>}
      </div>
    );
  };
}

export default App;
