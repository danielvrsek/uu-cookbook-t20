import React, { Component } from "react";
import { apiClient } from "../api/ApiClient";
import { AuthorList } from '../components/Author';

export default class AuthorListPage extends Component{
    constructor(props) {
        super(props);

        this.state = {};
        apiClient.getAuthors({}, (data) => this.setState({ data }))
    }

    render() {
        if (!this.state.data) {
            return "Loading...";
        }

        return <>
            <h1>List of all authors</h1>
            <AuthorList data={this.state.data} />
        </>;
    }
}