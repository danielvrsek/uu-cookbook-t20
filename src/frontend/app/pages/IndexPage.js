import React, { Component } from "react";
import RecipeOverview from "../components/recipes/RecipeOverview";
import { apiClient } from '../api/ApiClient'

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
            <h1>Recipe overview</h1>
            <RecipeOverview recipes={this.state.data} />
        </>;
    }
}