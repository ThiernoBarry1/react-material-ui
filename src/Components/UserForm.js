import React, { Component } from 'react';
import FormUserDetail from './FormUserDetail';
import FormPersonnalDetail from './FormPersonnalDetail';
import  Confirm  from './Confirm';
import Success from './Success'
export class UserForm extends Component {

    state = {
        step: 1,
        firstName:'',
        lastName:'',
        email: '',
        occupation:'',
        city:'',
        bio:''
    }
    // process next step
    nextStep = ()=>{
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    // process prev step 
    prevStep = ()=>{
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    // handle filds change
    handleChange = input =>  e =>{
        this.setState({ [input]: e.target.value });
    }
  render() {
      const { step, firstName, lastName, email,occupation, 
        city, bio } = this.state;
        const values = { step, firstName, lastName, email,occupation, 
            city, bio };
   switch (step ) {
       case 1:
           return (
               <FormUserDetail
                 nextStep = { this.nextStep }
                 handleChange = { this.handleChange }
                 values = { values }
               />
           )
        case 2:
            return (
                 <FormPersonnalDetail
                    nextStep = { this.nextStep }
                    prevStep = {this.prevStep }
                    handleChange = { this.handleChange }
                    values = { values }
                />
                )
        case 3:
            return (
                <Confirm
                   nextStep = { this.nextStep }
                   prevStep = {this.prevStep }
                   handleChange = { this.handleChange }
                   values = { values }
               />
               )
        case 4:
            return (
                <Success
                />
            )
       default:
           break;
   }
  }
}

export default UserForm
