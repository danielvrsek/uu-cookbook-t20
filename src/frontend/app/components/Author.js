import { A } from "@patched/hookrouter";
import React, { Component } from "react";
import { apiClient } from "../api/ApiClient";

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

    handleInputChange(event) {
        const target = event.target;

        this.setState({
          [target.name]: target.value
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
            <form onSubmit={this.handleSubmit}>
                <label>
                    First name: 
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Last name: 
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Username:
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>;
    }
    
}

function getAuthorLink(authorId) {
    return `/authors/${authorId}`;
}