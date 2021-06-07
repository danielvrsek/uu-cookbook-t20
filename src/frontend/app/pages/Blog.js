import React, { Component } from "react";
import { AuthorEditForm } from "../components/Author";
import { apiClient } from "../api/ApiClient";
export default class Blog extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        apiClient.getAuthor("22385deb-1de8-2316-049f-0076df6d458c", (data) => this.setState({ data }))
    }

    render() {
        return <>
        
            <h1>Author detail</h1>
            {this.state.data && <AuthorEditForm {...this.state.data} />}
        </>;
    }
}

