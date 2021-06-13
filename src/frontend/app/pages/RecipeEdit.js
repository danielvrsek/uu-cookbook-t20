import React, { Component } from "react";
import { apiClient } from "../api/ApiClient";
import RecipeEditForm from "../components/recipes/RecipeEditForm";

export default class RecipeEdit extends Component{
    constructor(props) {
        super(props);

        this.state = {};
        apiClient.getRecipe(this.props.recipeId, (data) => this.setState({ data }))

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        apiClient.editRecipe(this.props.recipeId, data, () => alert("Recept upraven."))
    }

    render() {
        if (!this.state.data) {
            return "Loading...";
        }

        return <>
            {this.state.data && <RecipeEditForm model={this.state.data} onSubmit={this.handleSubmit} />}
        </>;
    }
}