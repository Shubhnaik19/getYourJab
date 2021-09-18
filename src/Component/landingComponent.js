import { Component } from 'react';
import "../_App.scss";
import NavBar from './NavBar';
import Syringe from '../assets/doctor.svg';
// import particlesJS from 'particles.js'
// import CeterDetailsByPincode from './centerDetails' 

class LandingComponent extends Component {
    state = {}

    // componentDidMount(){
    // particlesJS.load('particles-js', 'assets/particles.json', function() {
    //     console.log('callback - particles.js config loaded');
    //   });
    // }

    render() {
        return (

            <div className="centerStyle" >
                <NavBar></NavBar>
                {/* <CeterDetailsByPincode /> */}
                <div className="about">
                    <div className="aboutSection">
                        <h1>
                            This is site to get info about <br />vaccination centers
                        </h1>
                    </div>
                    <div className="gradient">
                        {/* <img src={Syringe} alt=""/> */}
                    </div>
                </div>
                <footer className="footer">
                </footer>
            </div>

        );
    }
}

export default LandingComponent