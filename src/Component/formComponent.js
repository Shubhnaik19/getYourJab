import { Component } from 'react';

class formComponent extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.getOtp}>
                    <div className="otpForm"><input type="text" className="otpForm" name="mobNo" placeholder="Mobile No." autoComplete="off" /></div>
                    <div className="button submit"><button className="otpButton">Generate OTP</button></div>
                </form>
            </div>

        );
    }
}

export default formComponent;