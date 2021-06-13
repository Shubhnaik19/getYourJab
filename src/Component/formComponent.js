import { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class formComponent extends Component {
    state = {}
    render() {
        return (
            <div className="formAlignCenter">
                <h1 style={{color:'black'}}>Login through your mobile number.</h1>
                <form onSubmit={this.props.getOtp}>
                    <div className="otpForm">
                        {/* <input type="text"  name="mobNo" placeholder="Mobile No." autoComplete="off" /> */}
                        <TextField className="otpForm" label="Mobile No."/>
                        </div>
                    <div className="button submit"><Button className="otpButton" variant="contained">Generate OTP</Button></div>
                </form>
            </div>

        );
    }
}

export default formComponent;