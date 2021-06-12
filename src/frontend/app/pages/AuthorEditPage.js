import React, { Component } from "react";
import { apiClient } from "../api/ApiClient";
import { AuthorEditForm } from '../components/Author';

export default class AuthorListPage extends Component{
    constructor(props) {
        super(props);

        this.state = {};
        apiClient.getAuthor(this.props.authorId, (data) => this.setState({ data }))
    }

    render() {
        return <>
            {this.state.data && <AuthorEditForm {...this.state.data} />}
        </>;
    }
}