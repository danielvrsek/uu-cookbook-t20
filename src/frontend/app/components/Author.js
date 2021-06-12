import { A } from "@patched/hookrouter";
import React, { Component } from "react";
import { apiClient } from "../api/ApiClient";
import { Form, Submit, TextInput } from "../common/Forms";
import '../components/LoginForm.css';

export function AuthorList(props) {
    return (
       
        <ul>
            {props.data.map(x => (
                
                <li className="author-list">
                    
                    <A  key={x.id} href={getAuthorLink(x.id)}>
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

        apiClient.editAuthor(this.props.id, data, () => { })
        event.preventDefault();
    }

    render() {
        return <>
            <Form onSubmit={this.handleSubmit}>
            <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
               
            </Form>
            
        </>;
    }

}

function getAuthorLink(authorId) {
    return `/authors/${authorId}`;
}