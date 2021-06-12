import React, { Component } from "react";
import '../../components/LoginForm.css';

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