import React, { Component } from 'react';
import RecipeThumbnail from './RecipeThumbnail';

export default class RecipeOverviewRan extends Component {
    constructor(props) {
        super(props);
        const shuffled = this.props.recipes.sort(() => 0.5 - Math.random())
        this.state = {
            selected: shuffled.slice(0, 2)
        };

    }

    

    render() {
        console.log(this.state);
        return (
            <div className="container px-4 py-5" id="custom-cards">
                <div className="row row-cols-3 row-cols-lg-5 align-items-stretch g-4 py-5">
                    {this.state.selected.map(recipe => 
                        <RecipeThumbnail key={recipe.id} {...recipe} />
                    )}
                </div>
            </div>
        )
    }
}