import React from 'react';
import './Recipe.css';

export const RecipeDetailView = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <img src={props.thumbnail} className="recipe-thumbnail" />
                </div>
                <div className="col-4">
                    <RecipeInfo label="Počet porcí" value={`${props.servingSize} porce`} />
                    <RecipeInfo label="Čas přípravy" value={`${props.preparationLength} min.`} />
                </div>
            </div>
            <div className="row">
                <h3>Postup přípravy</h3>
            </div>
            <div className="row">
                {props.longDescription}
            </div>
        </div>
    );
}

const RecipeInfo = ({ label, value}) => {
    return (
        <div className="row">
            <div className="col-8">
                {label}:
            </div>
            <div className="col-4">
                {value}
            </div>
        </div>
    )
}