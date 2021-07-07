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



  render() {
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
