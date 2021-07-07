import { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
// import center from './center';
import LandingComponent from './landingComponent';
// import LoginForm from './loginForm';
import FormComponent from './formComponent';
import CeterDetails from './centerDetails'

class Routes extends Component {
    state = {}
    render() {
        return (
            <div >
                <Router>
                    <Switch>
                    <Route path="/login">
                            <FormComponent></FormComponent>
                        </Route>
                        <Route path="/searchCenter">
                            <CeterDetails />
                        </Route>
                        <Route path="/users">
                            {/* <Users /> */}
                        </Route>
                        <Route path="/">
                            <LandingComponent />
                        </Route>
                    </Switch>
                </Router>
            </div >
        );
    }
}

export default Routes;