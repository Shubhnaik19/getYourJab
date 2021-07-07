import { Component, Fragment } from 'react';
import axios from 'axios';
import Moment from 'moment';
import Center from './center';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class CeterDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      centerDetails: [],
      pincode: "",
      selectedDate: new Date()
    }
  }
  getCenterDetails = (e) => {
    e.preventDefault();
    // const pinCode = e.target.elements.pincode.value;
    // const date = e.target.elements.date.value;
    const dateDMY = Moment(this.state.selectedDate).format('DD-MM-YYYY');
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${this.state.pincode}&date=${dateDMY}`
      )
      .then((response) => {
        this.setState({ centerDetails: response.data.sessions })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };
  render() {
    const { centerDetails } = this.state;
    return (
      <Fragment>
        <NavBar></NavBar>
        <div className="formAlignCenter">

          <h1>GET CENTER DETAILS NEAR YOU:</h1>
          <form onSubmit={this.getCenterDetails}>
            {/* <div className="cityCenter"><input type="text" className="otpForm" name="pincode" placeholder="City Pincode" /></div> */}
            <TextField className="cityCenter" label="Pincode" onChange={(e) => this.setState({ pincode: e.target.value })} />
            <br></br>
            {/* <div className="cityCenter"><input type="date" className="otpForm" name="date" placeholder="Enter Date" /></div> */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                // disableToolbar
                // variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Select Date"
                value={this.state.selectedDate}
                onChange={this.handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
            <div className="button submit">
              {/* <button className="otpButton">Serach For Center</button> */}
              <Button onClick={this.getCenterDetails} className="otpButton" variant="contained" disabled={this.state.pincode.length !== 6}>Serach For Center</Button>
            </div>
          </form>
          {/* {
            centerDetails &&
            <div className="centerStyleGrid">
              {centerDetails.map(center => (<Center key={center.session_id} center={center}></Center>))}
            </div>
          } */}
          {this.state.centerDetails.length > 0 && <div className="card">
            <DataTable
              value={this.state.centerDetails}
              id="data-table"
              style={{
                // borderStyle: 'solid',
                // borderWidth: '1px',
                // boxShadow: '2px 4px #F5F5F5',
                // alignItems: 'center',
                // justifyContent: 'space-between'
              }}>
              <Column field="vaccine" header="Vaccine"></Column>
              <Column field="name" header="Name"></Column>
              <Column field="min_age_limit" header="Min Age"></Column>
              <Column field="available_capacity_dose1" header="DOSE-I Available No."></Column>
              <Column field="available_capacity_dose2" header="DOSE-II Available No."></Column>
              <Column field="address" header="Address"></Column>
              <Column field="fee_type" header="Fees" ></Column>
            </DataTable>
          </div>}
        </div>
      </Fragment >
    );
  }
}

export default CeterDetails;