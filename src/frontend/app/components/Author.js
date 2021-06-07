import { A } from "@patched/hookrouter";
import React, { Component } from "react";
import { apiClient } from "../api/ApiClient";
import { Form, Submit, TextInput } from "../common/Forms";

export function AuthorList(props) {
    return (
        <ul>
            {props.data.map(x => (
                <li>
                    <A key={x.id} href={getAuthorLink(x.id)}>
                        <AuthorDetail {...x} />
                    </A>
                </li>

            ))}
        </ul>
    );
}

export function AuthorSimpleView(props) {
    return <>
        {props.firstName} {props.lastName}
    </>;
}

export function AuthorDetail(props) {
    return <>
        {props.firstName} {props.lastName}, {props.username}
    </>;
}

export class AuthorEditForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = { ...props };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(name, value) {
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username
        }

        apiClient.editAuthor(this.props.id, data, () => {})
        event.preventDefault();
    }

    render() {
        return <>
            <Form onSubmit={this.handleSubmit}>
                <TextInput name="firstName" label="First name" value={this.state.firstName} onChange={this.handleInputChange} />
                <br />
                <TextInput name="lastName" label="Last name" value={this.state.lastName} onChange={this.handleInputChange} />
                <br />
                <TextInput name="username" label="Username" value={this.state.username} onChange={this.handleInputChange} />
                <br />
                <Submit value="Save" />
            </Form>
        </>;
    }
    
}

function getAuthorLink(authorId) {
    return `/authors/${authorId}`;
}