import React, { Component } from 'react';
import './Signup.style.scss';
import Button from './Button.component';
import Forminput from './Forminput.component';
import { AuthContext } from './../../Firebase/Auth';

export default class Signup extends Component {
  state = {
    name: '',
    email: '',
    newPassword: '',
    confirmPassword: '',
    warning: '',
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newPassword === this.state.confirmPassword) {
      let auth = this.context;
      auth.Signup(this.state.name, this.state.email, this.state.newPassword);
      this.setState({
        name: '',
        email: '',
        newPassword: '',
        confirmPassword: '',
        warning: '',
      });
    } else {
      this.setState({
        warning: "Password haven't matched",
      });
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    e.preventDefault();
  };

  render() {
    return (
      <div className='signupComponent'>
        <h2>Sign up</h2>
        <h5>Create a new account</h5>
        <form onSubmit={this.handleSubmit}>
          <Forminput
            size='md'
            label='Name'
            handleChange={this.handleChange}
            type='text'
            name='name'
            required
            value={this.state.name}
          />
          <Forminput
            size='md'
            label='Email'
            handleChange={this.handleChange}
            type='email'
            name='email'
            required
            value={this.state.email}
          />
          <Forminput
            size='md'
            label='New Password'
            handleChange={this.handleChange}
            type='password'
            name='newPassword'
            required
            value={this.state.newPassword}
          />
          <Forminput
            size='md'
            label='Confirm Password'
            handleChange={this.handleChange}
            type='password'
            name='confirmPassword'
            required
            value={this.state.confirmPassword}
          />
          <h6>{this.state.warning}</h6>
          <Button
            bgColor='black'
            color='white'
            hbgColor='white'
            hColor='#333'
            type='submit'
          >
            Sign up
          </Button>
        </form>
      </div>
    );
  }
}

Signup.contextType = AuthContext;
