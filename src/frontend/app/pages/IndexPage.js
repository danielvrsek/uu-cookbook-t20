import React, { Component } from "react";
import RecipeOverview from "../components/recipes/RecipeOverview";

export default class IndexPage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            recipes: [
                {
                    id: 0,
                    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    preparationMin: 50,
                    mealCount: 5
                },
                {
                    id: 1,
                    name: "Cokoladovy dort",
                    preparationMin: 50,
                    mealCount: 5
                },
                {
                    id: 2,
                    name: "Cokoladovy dort",
                    preparationMin: 50,
                    mealCount: 5
                },
                {
                    id: 3,
                    name: "Cokoladovy dort",
                    preparationMin: 50,
                    mealCount: 5
                },
                {
                    id: 4,
                    name: "Cokoladovy dort",
                    preparationMin: 50,
                    mealCount: 5
                },
                {
                    id: 5,
                    name: "Cokoladovy dort",
                    preparationMin: 50,
                    mealCount: 5
                }
             ]
        };
    }

    render() {
        return <>
         <h1>Recipe overview</h1>
         <RecipeOverview recipes={this.state.recipes} />
        </>;
    }
}