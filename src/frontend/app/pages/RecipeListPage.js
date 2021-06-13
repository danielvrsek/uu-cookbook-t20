import React, { Component } from 'react';
import { A } from '@patched/hookrouter';
import RecipeOverview from '../components/recipes/RecipeOverview';
import { apiClient } from '../api/ApiClient';
import '../components/recipes/RecipeDetailView.css';
export default class Recipe extends Component {

    
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
        <h1>Recepty</h1>
        <br />
        <br />
        <div className="link-text">
        <A href="/addrecipe"><button type="submit" className="btn btn-success">Přidat recept</button></A>
        <RecipeOverview recipes={this.state.data} />
        </div>
    </>;
}
}