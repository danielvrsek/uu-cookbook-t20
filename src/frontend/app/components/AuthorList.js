import React, { Component} from "react";
import { apiClient } from "../api/ApiClient";

export default class AuthorList extends Component{
    constructor(props) {
        super(props);

        this.state = {};
        apiClient.getAuthors({}, (data) => this.setState({ data }))
    }

    render() {
        if (!this.state.data) {
            return "Loading...";
        }

        return (
            this.state.data.map(Author)
        );
    }
}

function Author(props) {
    return <div key={props.id}>
        {props.firstName} {props.lastName}
        <br />
    </div>;
}