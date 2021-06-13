import React, { Component } from "react";
import './Forms.css';

export default class TextInput extends Component {
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
                {this.props.label}:
                <input className="form-control" type="text" name={this.props.name} value={this.props.value} onChange={this.handleChange} onKeyDown={this.props.onKeyDown} />
            </label>
        );
    }
}