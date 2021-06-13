import React, { Component } from 'react';
import { apiClient } from '../../api/ApiClient';
import NumberInput from '../../common/forms/NumberInput';
import Submit from '../../common/forms/Submit';
import TextInput from '../../common/forms/TextInput';
import TextArea from '../../common/forms/TextArea';
import { Form } from '../../common/forms/Form';
import '../../components/LoginForm.css';
import Tagger from '../../components/Tagger';


export default class RecipeEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.model.id,
            title: this.props.model.title ?? "",
            servingSize: this.props.model.servingSize ?? 0,
            preparationLength: this.props.model.preparationLength ?? 0,
            longDescription: this.props.model.longDescription ?? ""
         };

         apiClient.getRecipeCategories((data) => this.setState({ ...this.state, recipeCategories: data }))

         this.handleInputChange = this.handleInputChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleCategoryChange = this.handleCategoryChange.bind(this);
     }
 
     handleInputChange(name, value) {
         this.setState({
             [name]: value
         });
     }
 
     handleCategoryChange(items) {
         this.setState({
             ...this.state,
             selectedCategories: items.map(x => x.key)
         });
     }
 
     handleSubmit(event) {
         const data = {
             title: this.state.title,
             servingSize: this.state.servingSize,
             preparationLength: this.state.preparationLength,
             longDescription: this.state.longDescription,
             recipeCategories: this.state.selectedCategories
         }
    }

    render() {
        if (!this.state.recipeCategories) {
            return "Loading..."
        }

        const mapCategory = (items) => items && items.map(x => ({
            key: x.id,
            value: x.name
        }));

        let items = mapCategory(this.state.recipeCategories);
        console.log(this.props.model)
        let selectedCategories = this.props.model && mapCategory(this.props.model.recipeCategories);

        return <>
            <Form onSubmit={this.handleSubmit}>
                <TextInput name="title" label="Název" value={this.state.title} onChange={this.handleInputChange} />
                <div className="row">
                    <div className="col">
                    <label className="text-secondary">Počet porcí:</label>
                        <NumberInput name="servingSize" label="Počet porcí" value={this.state.servingSize} onChange={this.handleInputChange} />
                    </div>
                    <div className="col">
                    <label className="text-secondary">Čas přípravy (min):</label>
                        <NumberInput name="preparationLength" value={this.state.preparationLength} onChange={this.handleInputChange} />
                    </div>
                </div>
                <label className="text-secondary">Postup přípravy:</label>
                <TextArea  name="longDescription" label="Příprava" value={this.state.longDescription} onChange={this.handleInputChange} />
                <Tagger label="Kategorie" onChange={this.handleCategoryChange} items={items} selectedItems={selectedCategories} />
                <Submit value="Upravit" />
            </Form>
        </>
    }
}

function getRecipeLink(recipeId) {
    return `/edit/${recipeId}`;
}