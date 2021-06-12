import React, { Component } from "react";

export default class NumberInput extends Component {
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
            <label class="text-secondary">
                {this.props.label}: &nbsp; &nbsp;
                <input type="number" name={this.props.name} value={this.props.value} onChange={this.handleChange} />
            </label>
        );
    }
}