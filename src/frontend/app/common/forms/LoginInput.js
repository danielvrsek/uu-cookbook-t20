import React, { Component } from "react";
import './Forms.css';

export default class LoginInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event) {
        const target = event.target;
        this.props.onChange(target.name, target.value);
    }

    render() {
        return (
            <input className="login-box" type="text" name={this.props.name} value={this.props.value} onChange={this.handleChange} />
        );
    }
}