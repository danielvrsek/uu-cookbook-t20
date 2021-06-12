import React, {Component} from "react";


export default class PasswordInput extends Component {

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
            <label className="text-secondary"> &nbsp;
                {this.props.label}
                <input type="password" name={this.props.name} value={this.props.value} onChange={this.handleChange} className="login-box" />
            </label>
        );
    }
}