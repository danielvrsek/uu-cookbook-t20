import React, { Component } from "react";

export default class Select extends Component {
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
            <select type="text" className="form-control">
                {this.props.data.map(option => <option key={option.key}>{option.value}</option>)}
            </select>
        );
    }
}