import React, { Component } from 'react';
import { apiClient } from '../api/ApiClient';
import '../components/LoginForm.css';
import RecipeEditForm from '../components/recipes/RecipeEditForm';


export default class AddRecipe extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        apiClient.createRecipe(data, () => { })
        event.preventDefault();
    }

    render() {
        return <>
            <h1>Upravit recept</h1>
            <RecipeEditForm />
        </>
    }
}