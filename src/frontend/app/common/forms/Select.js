import React, { Component } from "react";

export default class Select extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.props.onChange(target.value);
    }

    render() {
        console.log(this.props.data)
        return (
            <select type="text" className="form-select form-select-sm" onChange={this.handleChange}>
                {this.props.data.map((option, i) => <option selected={i === 0} key={option.key}>{option.value}</option>)}
            </select>
        );
    }
}