import React from "react";

export default function PasswordInput(props) {
    return (
        <label>
                {this.props.label}:
                <input type="password" name={this.props.name} value={this.props.value} onChange={this.handleChange} className="login-box" />
            </label>
    )
}