import React, { Component } from 'react';
import './signin.styles.scss';

import FormInput from './../form-input/form-input.component';
import Button from './../button/button.component';

import { signInWithGoogle } from './../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  hangleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">Already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.hangleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <Button children="Login" type="submit" />
            <Button
              children="Sign in with Google"
              onClick={signInWithGoogle}
              isGoogleSignIn
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
