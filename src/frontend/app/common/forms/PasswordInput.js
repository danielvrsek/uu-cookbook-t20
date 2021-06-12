import React from "react";

export default function PasswordInput(props) {
    return (
        <label class="text-secondary">
                {this.props.label}:
                <input type="password" name={this.props.name} value={this.props.value} onChange={this.handleChange} className="login-box" />
            </label>
    )
}