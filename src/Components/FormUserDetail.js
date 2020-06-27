import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextFild from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetail extends Component {
    continue = e=> {
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
      const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
          <React.Fragment>
            <AppBar title=" Enter User details"/>
            <TextFild
               hintText="Enter your FirstName"
               floatingLabelText="First Name"
               onChange={ handleChange('firstName')}
               defaultValue={values.FirstName}
            /> <br/>
            <TextFild
               hintText="Enter your LastName"
               floatingLabelText="Last Name"
               onChange={ handleChange('lastName')}
               defaultValue={values.LastName}
            /> <br/>
            <TextFild
               hintText="Enter your email"
               floatingLabelText="email"
               onChange={ handleChange('email')}
               defaultValue={values.email}
            /> <br/>
            <RaisedButton
              label="continue"
              style={styles.button}
              primary={true}
              onClick={this.continue}
            />
          </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
    button: {
        margin: 15,
    }
}
export default FormUserDetail
