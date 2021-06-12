
import React, { Component } from "react";
import Recipe from '../components/recipes/RecipeList';
export default class Favourites extends Component{


    render() {
        
        return <>
        <h1>Oblibene</h1>
            <Recipe />
        </>;
    }
}