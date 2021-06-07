import React, { Component } from "react";
import { apiClient } from "../api/ApiClient";
import MainLayout from "../common/MainLayout";
import { AuthorList } from '../components/Author';

export default class IndexPage extends Component{
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return <>
         <h1>Home</h1>
        </>;
    }
}