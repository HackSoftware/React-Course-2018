import React from 'react';

import backgroundImage from 'assets/background.jpg';
import {LoginForm} from './components';

import './styles.css';

class Login extends React.Component {
  render() {
    return (
      <div
        className="page page--with_background centered"
        style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="login login--transparent">
          <h1>Login</h1>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
