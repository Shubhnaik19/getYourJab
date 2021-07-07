import { Component } from 'react';
import Syringe from '../assets/syringe.png';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }



    render() {
        return (
            <div className="navbar">
                <img src={Syringe} />
                <h1 className="heading">
                    Get Jabbed
                </h1>
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <div className="link" onClick={() => { this.props.history.push('/') }}>
                            Home
                        </div>
                    </li>
                    <li className="navbar-item">
                        <div className="link" onClick={() => { this.props.history.push('/searchCenter') }}>
                            Slots
                        </div>
                    </li>
                    <li className="navbar-item">
                        <div className="link" onClick={() => { this.props.history.push('login') }}>
                            Login
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default withRouter(NavBar);