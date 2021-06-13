import React, { Component } from "react";
import { apiClient } from '../api/ApiClient'
import RecipeOverviewRan from "../components/recipes/RecipeOvervewRan";

export default class IndexPage extends Component{
    constructor(props) {
        super(props);

        this.state = {};
        apiClient.getRecipes((data) => this.setState({ data }))
    }

    render() {
        if (!this.state.data) {
            return "Loading...";
        }

        return <>
            <h1>Tipy na dnešek!</h1>

            <RecipeOverviewRan recipes={this.state.data} />

        </>;
    }
}