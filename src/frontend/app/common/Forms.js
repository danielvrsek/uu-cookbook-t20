import React, { Component } from "react";

export class Form extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.onSubmit();
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.props.children}
            </form>
        );
    }
}

export class TextInput extends Component {
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
            <label>
                {this.props.label}:
                <input type="text" name={this.props.name} value={this.props.value} onChange={this.handleChange} />
            </label>
        );
    }
}

export function Submit(props) {
    return <input type="submit" value={props.value} />;
}