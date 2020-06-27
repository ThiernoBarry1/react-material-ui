import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextFild from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {
   
  render() {
    return (
      <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Success"/>
            <h1>Thank you for your soubmission</h1>
            <p> we will give you feedback</p>
          </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success
