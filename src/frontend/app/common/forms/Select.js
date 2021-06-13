import React, { Component } from "react";

export default class Select extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.props.onChange(this.props.data.filter(x => x.key === target.value)[0]);
    }

    render() {
        return (
            <select type="text" className="form-select form-select-sm" value={this.props.selectedItem.key} onChange={this.handleChange}>
                {this.props.data.map((option, i) => <option key={option.key} value={option.key}>{option.value}</option>)}
            </select>
        );
    }
}