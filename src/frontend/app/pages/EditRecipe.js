import React, { Component } from "react";
import { apiClient } from "../api/ApiClient";
import RecipeEditForm from "../components/recipes/RecipeEditForm";
export default class EditRecipe extends Component{

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
         {this.state.data && <RecipeEditForm model={this.state.data} />}
        </>;
    }
}