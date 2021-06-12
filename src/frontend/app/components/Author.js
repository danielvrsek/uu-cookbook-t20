import { A } from "@patched/hookrouter";
import React, { Component } from "react";
import { apiClient } from "../api/ApiClient";
import { Form } from "../common/forms/Form";
import Submit from "../common/forms/Submit";
import TextInput from "../common/forms/TextInput";
import '../components/LoginForm.css';

export function AuthorList(props) {
    return (

        <ul>
            {props.data.map(x => (

                <li>


                    <AuthorDetail {...x} />
                    <A key={x.id} href={getAuthorLink(x.id)}><i class="fas fa-pen"></i> <i class="fas fa-user-times"></i>
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

        apiClient.editAuthor(this.props.id, data, () => { })
        event.preventDefault();
    }

    render() {
        return <>
            <Form onSubmit={this.handleSubmit}>

                <div className="login-form">
                    <div className="form-box solid">
                        <h1 className="login-text">Úprava</h1>
                        <br></br>
                        <TextInput name="firstName" label="Jméno" value={this.state.firstName} onChange={this.handleInputChange} />
                        <br />
                        <TextInput name="lastName" label="Příijmení" value={this.state.lastName} onChange={this.handleInputChange} />
                        <br />
                        <TextInput name="username" label="Přezdívka" value={this.state.username} onChange={this.handleInputChange} />
                        <br />
                        <Submit value="Uložit" />
                    </div>
                </div>
            </Form>

        </>;
    }

}

function getAuthorLink(authorId) {
    return `/authors/${authorId}`;
}