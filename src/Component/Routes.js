import { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import center from './center';
import LandingComponent from './landingComponent';

class Routes extends Component {
    state = {}
    render() {
        return (
            <div >
                <Router>
                    <Switch>
                        <Route path="/searchCenter">
                            {/* <About /> */}
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