import React, { Component } from 'react';
import RecipeThumbnail from './RecipeThumbnail';
import './RecipeOverview.css';

export default class RecipeOverview extends Component {
    constructor(props) {
        super(props);


    }



    render() {
        return (
            <div className="link-text container px-4 py-5" id="custom-cards">
                <div className="link-text row row-cols-3 row-cols-lg-5 align-items-stretch g-4 py-5">
                    {this.props.recipes.map(recipe =>
                        <RecipeThumbnail key={recipe.id} {...recipe} />
                    )}
                </div>
            </div>
        )
    }
}