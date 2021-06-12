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
            <form onSubmit={this.handleSubmit} className={`form-control ${this.props.customClass}`}>
                {this.props.children}
            </form>
        );
    }
}