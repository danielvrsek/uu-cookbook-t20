import { A, navigate } from '@patched/hookrouter';
import React, { Component } from 'react';
import { Button } from '../Button';
import './RecipeDetailView.css';
import { apiClient } from  '../../api/ApiClient';

export const RecipeDetailView = (props) => {

 

    const handleDelete = () => {
        apiClient.deleteRecipe(props.id, () => navigate('/recipes'));
    }

    return <>
        <div className="container">

            <div className="recipe-btnEdit">
            <A href={`/recipes/${props.id}/edit`}><i className="fas fa-edit"></i></A> &nbsp; <A onClick={handleDelete} className="recipe-btnDel" href="#"><i className="recipe-btnDel fas fa-trash-alt"></i></A>
            </div>
            <div className="row">
                <div className="col-8 text-start">
                    <img src={`/img/${props.thumbnail}`} className="recipe-thumbnail" />
                </div>
                <div className="col-4">
                    <div className="row recipe-title">
                        <h3>{props.title}</h3>
                    </div>
                    <RecipeInfo label="Počet porcí" value={`${props.servingSize} ${getLocalizedServingSizeString(props.servingSize)}`} />
                    <RecipeInfo label="Čas přípravy" value={`${props.preparationLength} min.`} />
                    <div className="row recipe-description">
                        {props.longDescription}
                        <div className="row recipe-description">
                            Kategorie: 
                        </div>
                    </div>
                    
                </div>
                <div className="recipe-author">
                    Autor: 
                </div>
            </div>
        </div>
    </>;
}


function getLocalizedServingSizeString(servingSize) {
    return servingSize < 5 ? "porce" : "porcí";
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