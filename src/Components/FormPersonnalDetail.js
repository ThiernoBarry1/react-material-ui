import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextFild from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonnalDetail extends Component {
    continue = e=> {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e=> {
        e.preventDefault();
        this.props.prevStep();
    }
  render() {
      const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
          <React.Fragment>
            <AppBar title=" Enter Personnal Dtails"/>
            <TextFild
               hintText="Enter your Occupation"
               floatingLabelText="Occupation"
               onChange={ handleChange('occupation')}
               defaultValue={values.occupation}
            /> <br/>
            <TextFild
               hintText="Enter your City"
               floatingLabelText="City"
               onChange={ handleChange('city')}
               defaultValue={values.City}
            /> <br/>
            <TextFild
               hintText="Enter your Bio"
               floatingLabelText="bio"
               onChange={ handleChange('bio')}
               defaultValue={values.bio}
            /> <br/>
           
            <RaisedButton 
              label="back"
              style={styles.button}
              primary={false}
              onClick={this.back }
            />
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
export default FormPersonnalDetail
