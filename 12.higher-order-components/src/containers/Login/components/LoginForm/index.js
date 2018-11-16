import React from 'react';

import './styles.css';

class LoginForm extends React.Component {
  render() {
    return (
      <form className="login_form">
        <label>Username</label>
        <input name="username" />
        <label>Password</label>
        <input name="password" />
      </form>
    );
  }
}

export default LoginForm;
