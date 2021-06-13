import React, { Component } from 'react';
import './Recipe.css';
import { A } from '@patched/hookrouter';
import RecipeOverview from './RecipeOverview';
import { apiClient } from '../../api/ApiClient'

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
        <A href="/addrecipe"><button type="submit" className="btn btn-success">Přidat recept</button></A>
        <RecipeOverview recipes={this.state.data} />
    </>;
}
}