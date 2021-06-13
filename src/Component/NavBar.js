import { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() {
        return (
            <div className="navbar">
                <h1> Get Your Jab</h1>
                <ul className ="navbar-nav">
                    <li className="navbar-item">
                        <div className="link">
                        Home
                        </div>
                    </li>

                    <li className="navbar-item">
                    <div className="link">
                        Login
                        </div>
                    </li>

                    <li className="navbar-item">
                    <div className="link">
                        Career
                        </div>
                    </li>

                    <li className="navbar-item">
                    <div className="link">
                        About
                        </div>
                    </li>

                    <li className="navbar-item">
                    <div className="link">
                        Contact
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;