import React, { Component, useState } from 'react';
import './LoginForm.css';
import LoginInput from '../common/forms/LoginInput';
import PasswordInput from '../common/forms/PasswordInput';
import { apiClient } from '../api/ApiClient';
import LoginButton from '../common/forms/LoginButton';
import { Form } from '../common/forms/Form';
import { navigate } from '@patched/hookrouter';

export default class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			username: "",
			password: ""
		};
	}

	handleInputChange(name, value) {
		this.setState({
			...this.state,
			[name]: value
		});
	}

	handleSubmit() {
		const data = {
			username: this.state.username,
			password: this.state.password
		};

		apiClient.login(data, () => navigate('/'));
	}

	render() {

		return (
		<div className="login-form">
			<div className="form-box solid">
				<Form onSubmit={this.handleSubmit}>
					<h1 className="login-text">Přihlášení</h1>
					<br></br>
					<label>Uživatelské jméno</label>
					<br></br>
					<LoginInput name="username" value={this.state.username} onChange={this.handleInputChange} />
					<br></br>
					<label>Heslo</label>
					<br></br>
					<PasswordInput name="password" value={this.state.password} onChange={this.handleInputChange} />
					<br></br>
					<LoginButton value="Přihlásit se" />
				</Form>
			</div>
		</div>);
	}
}
