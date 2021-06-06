import { Component } from 'react';


class center extends Component {
    state = {  }
    render() {
        return (
            <div className="centerStyle">
                <h1>Center Name : {this.props.center.name}</h1>
                <h3>Dose Available :{this.props.center.available_capacity}</h3>
                {console.log(this.props.center.name)}
            </div>
        );
    }
}


export default center;