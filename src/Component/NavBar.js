import { Component } from 'react';
import Syringe from '../assets/syringe.png';

class NavBar extends Component {
    state = {  }
    render() {
        return (
            <div className="navbar">
                <img src={Syringe}/>
                <h1 className="heading">
                Get Jabbed
                </h1>
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
                </ul>
            </div>
        );
    }
}

export default NavBar;