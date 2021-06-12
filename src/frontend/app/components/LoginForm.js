import React, { Component, useState } from 'react';
import './LoginForm.css';
import LoginInput from '../common/forms/LoginInput';
import PasswordInput from '../common/forms/PasswordInput';
import { apiClient } from '../api/ApiClient';
import LoginButton from '../common/forms/LoginButton';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {};

  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {

    apiClient.login(this.state, data, () => { })
    event.preventDefault();
  }

  render() {

    
    return <>

      <div>
        <div className="login-form">
          <div className="form-box solid">
            <form>
              <h1 className="login-text">Přihlášení</h1>
              <br></br>
              <label>Uživatelské jméno</label>
              <br></br>
              <LoginInput value={this.state.title} onChange={this.handleInputChange} />
              <br></br>
              <label>Heslo</label>
              <br></br>
              <PasswordInput value={this.state.title} onChange={this.handleInputChange} />
              <br></br>
              <LoginButton value="Přihlásit se" />
            </form>
          </div>
        </div>
      </div>
    </>;
  }
}
