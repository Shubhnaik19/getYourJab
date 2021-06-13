import "./_App.scss";
import React from "react";
import { Component } from "react";
import FormComponent from "./Component/formComponent";
import Login from "./Component/loginForm";
import CertificateDownload from "./Component/certificateDownload";
import BeneficiaryDetails from "./Component/BeneficiaryDetails";
import CenterDetails from "./Component/centerDetails";
import NavBar from "./Component/NavBar"
import { sha256 } from "js-sha256";
import './styles/_forms.scss'
import axios from "axios";
import Routes from "./Component/Routes"

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
      mobile: mobileNumber,
    };
    axios
      .post(
        "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
        requestOptions
      )
      .then((response) => {
        this.setState({ txnId: response.data.txnId });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  login = async (e) => {
    e.preventDefault();
    const otp = e.target.elements.otp.value;
    const cnfOTPPayload = {
      otp: sha256(otp),
      txnId: this.state.txnId,
    };
    axios
      .post(
        "https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP",
        cnfOTPPayload
      )
      .then((response) => {
        this.setState({ token: response.data.token });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onDownload = async (e) => {
    e.preventDefault();
    const beneficiaryCode = e.target.elements.beneficiaryCode.value;
    const config = {
      headers: { Authorization: `Bearer ${this.state.token}` },
    };
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download?beneficiary_reference_id=${beneficiaryCode}`,
        config
      )
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.pdf');
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
    // <NavBar></NavBar>
    //     {!txnId && <FormComponent getOtp={this.getOtp}></FormComponent>}
    //     {txnId && <Login login={this.login}></Login>}
    //     {token && (
    //       <CertificateDownload
    //         onDownload={this.onDownload}
    //       ></CertificateDownload>
    //     )}
    //     {token && <BeneficiaryDetails token={token}></BeneficiaryDetails>}
    //     <CenterDetails></CenterDetails> 
  };

  render() {
    // const { txnId, token } = this.state;
    return (
      <div className="App">
        <React.Fragment>
          <Routes />
        </React.Fragment>
      </div>


    );
  }
}

export default App;
