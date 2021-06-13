import { navigate } from '@patched/hookrouter';
import React, { Component } from 'react';
import { apiClient } from '../api/ApiClient';
import '../components/LoginForm.css';
import RecipeEditForm from '../components/recipes/RecipeEditForm';


export default class RecipeAdd extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        apiClient.createRecipe(data, (recipeId) => {
            navigate(`/recipes/${recipeId}/edit`);
            alert("Recept vytvořen.");
        })
    }

    render() {
        return <>
            <h1>Vytvořit recept</h1>
            <RecipeEditForm onSubmit={this.handleSubmit} />
        </>
    }
}