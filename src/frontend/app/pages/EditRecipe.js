import React, { Component } from "react";
import RecipeEditForm from "../components/recipes/RecipeEditForm";
export default class EditRecipe extends Component{

    constructor(props) {
        super(props);

        this.state = {};
        apiClient.getRecipes(this.props.id, (data) => this.setState({ data }))
    }
    render() {
        return <>
         {this.state.data && <RecipeEditForm {...this.state.data} />}
        </>;
    }
}