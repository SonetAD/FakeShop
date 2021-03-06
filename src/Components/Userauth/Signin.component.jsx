import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button.component';
import Forminput from './Forminput.component';
import './Signin.style.scss';
import { AuthContext } from '../../Firebase/Auth';

export default class Signin extends Component {
  state = {
    email: '',
    password: '',
    warningEmail: '',
    warningPassword: '',
    auth: this.context,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.state.auth.Signin(this.state.email, this.state.password);

    console.log(this.state.auth);

    console.log('error checking');
    console.log(this.state.auth.error);

    if (this.state.auth.error === 'noerror') {
      console.log('lala');
      this.setState({
        email: '',
        password: '',
        warningEmail: '',
        warningPassword: '',
      });
    } else {
      if (this.state.auth.error.includes('user-not-found')) {
        console.log('fuck');
      }
    }
  };
  handleGoogleSignin = (e) => {
    e.preventDefault();
    let auth = this.context;
    console.log(auth);
    auth.SigninWithGoogle();
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    e.preventDefault();
  };

  render() {
    return (
      <div className='signinComponent'>
        <h2>Sign in</h2>
        <h5>Sign in with email & password</h5>
        <form>
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
            label='Password'
            handleChange={this.handleChange}
            type='password'
            name='password'
            required
            value={this.state.password}
          />
          <Button
            handleClick={this.handleSubmit}
            bgColor='#333'
            color='white'
            hbgColor='yellow'
            hColor='black'
          >
            Sign in
          </Button>
          <Button
            handleClick={this.handleGoogleSignin}
            color='black'
            bgColor='orange'
            hclor='black'
            hbgColor='yellow'
          >
            <FontAwesomeIcon color='black' icon='fa-brands fa-google' />
            <span>Sign in</span>
          </Button>
        </form>
      </div>
    );
  }
}

Signin.contextType = AuthContext;
