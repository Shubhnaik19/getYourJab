import { Component } from 'react';

class loginForm extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.login}>
                    <div className="otpForm"><input type="text" className="otpForm" name="otp" placeholder="Your OTP" autoComplete="off" /></div>
                    <div className="button submit"><button className="Login">Login</button></div>
                </form>
            </div>
        );
    }
}

export default loginForm;