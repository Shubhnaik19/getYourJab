import { Component } from 'react';
import axios from 'axios';

class ceterDetails extends Component {
    state = { centerDetails : null }
    getCenterDetails = async (e) =>{
        e.preventDefault();
        const pinCode = e.target.elements.pincode.value;
        const date = e.target.elements.date.value;
       axios
         .get(
           `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pinCode}&date=${date}`
         )
         .then((response) => {
           this.setState({centerDetails : JSON.stringify(response.data)})
         })
         .catch((err) => {
           console.log(err);
         });
}
    render() {
        const {centerDetails} = this.state;
        return (
            <div className="container">
                <form onSubmit={this.getCenterDetails}>
                    <div className="cityCenter"><input type="text" className="otpForm" name="pincode" placeholder="City Pincode" /></div>
                    <div className="cityCenter"><input type="text" className="otpForm" name="date" placeholder="Enter Date" /></div>
                    <div className="button submit"><button className="otpButton">Serach For Center</button></div>
                </form>
                {centerDetails && <div>
                    {centerDetails}</div>}
            </div>
        );
    }
}

export default ceterDetails;