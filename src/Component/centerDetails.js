import { Component } from 'react';
import axios from 'axios';
import Moment from 'moment';
import Center from './center';

class ceterDetails extends Component {
    state = { centerDetails : null }
    getCenterDetails = async (e) =>{
        e.preventDefault();
        const pinCode = e.target.elements.pincode.value;
        const date = e.target.elements.date.value;
        const dateDMY = Moment(date).format('DD-MM-YYYY');
       axios
         .get(
           `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pinCode}&date=${dateDMY}`
         )
         .then((response) => {
           this.setState({centerDetails : response.data.sessions})
         })
         .catch((err) => {
           console.log(err);
         });
}
    render() {
        const {centerDetails} = this.state;
        return (
            <div className="formAlignCenter">
              <h1>Get center details near you:</h1>
                <form onSubmit={this.getCenterDetails}>
                    <div className="cityCenter"><input type="text" className="otpForm" name="pincode" placeholder="City Pincode" /></div>
                    <div className="cityCenter"><input type="date" className="otpForm" name="date" placeholder="Enter Date" /></div>
                    <div className="button submit"><button className="otpButton">Serach For Center</button></div>
                </form>{
                  centerDetails &&
                <div className="centerStyleGrid">
                    {centerDetails.map(center => (<Center key={center.session_id} center={center}></Center>))}
                </div>
    }
            </div>
        );
    }
}

export default ceterDetails;