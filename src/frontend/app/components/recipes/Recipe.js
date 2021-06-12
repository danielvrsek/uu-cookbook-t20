import React, { Component } from 'react';
import './Recipe.css';
import { RecipesList } from './RecipesList';


class Recipe extends Component {


    render() {
        return (
            <nav className="recipe-layout">
                <div>
                    {RecipesList.map((rItem, index) => {
                        return (
                            <li key={index}>
                                <div className="recipe-layout">
                                    <div className="recipes">
                                    <div className="item__description">
                                        <div>{rItem.title}</div>
                                        <div className="item__time">{rItem.time}</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </div>
            </nav>
        )
    }
}

export default Recipe;