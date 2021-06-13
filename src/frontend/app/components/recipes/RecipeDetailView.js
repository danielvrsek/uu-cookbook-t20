import React from 'react';
import './RecipeDetailView.css';

export const RecipeDetailView = (props) => {
    return <>
        <h1>Detail receptu</h1>
        <div className="container">
            <div className="row">
                <div className="col-8 text-start">
                    <img src={`/img/${props.thumbnail}`} className="recipe-thumbnail" />
                </div>
                <div className="col-4">
                    <div className="row recipe-title">
                        <h3>{props.title}</h3>
                    </div>
                    <RecipeInfo label="Počet porcí" value={`${props.servingSize} porce`} />
                    <RecipeInfo label="Čas přípravy" value={`${props.preparationLength} min.`} />
                    <div className="row recipe-description">
                        {props.longDescription}
                    </div>
                </div>
            </div>
        </div>
    </>;
}

const RecipeInfo = ({ label, value}) => {
    return (
        <div className="row">
            <div className="col-4 text-end">
                {label}:
            </div>
            <div className="col-8 text-end">
                {value}
            </div>
        </div>
    )
}