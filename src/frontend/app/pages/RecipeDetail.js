import React, { Component } from "react";
import { apiClient } from "../api/ApiClient";
import { RecipeDetailView } from "../components/recipes/RecipeDetailView";

export default class RecipeDetail extends Component{
    constructor(props) {
        super(props);

        this.state = {};
        apiClient.getRecipe(this.props.recipeId, (data) => this.setState({ data }))
    }

    render() {
        if (!this.state.data) {
            return "Loading...";
        }

        return <>
            <RecipeDetailView {...this.state.data} />
        </>;
    }
}