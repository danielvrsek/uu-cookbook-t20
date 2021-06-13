import React, { Component } from 'react';
import { apiClient } from '../../api/ApiClient';
import NumberInput from '../../common/forms/NumberInput';
import Submit from '../../common/forms/Submit';
import TextInput from '../../common/forms/TextInput';
import Select from '../../common/forms/Select';
import TextArea from '../../common/forms/TextArea';
import { Form } from '../../common/forms/Form';
import '../../components/LoginForm.css';
import Tagger from '../../components/Tagger';


export default class RecipeEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title ?? "",
            servingSize: this.props.servingSize ?? 0,
            preparationLength: this.props.preparationLength ?? 0,
            longDescription: this.props.longDescription ?? ""
         };

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
 
         /* apiClient.createRecipe(data, () => { })
         event.preventDefault(); */
     
    }


    render() {

        
        if (!this.state.recipeCategories) {
            return "Loading..."
        }

        return <>

            <Form onSubmit={this.handleSubmit}>
               
                <div>
                    <div>
                        <h1>Upravit recept</h1>
                        <br></br>
                        <TextInput name="title" label="Název" value={this.state.title} onChange={this.handleInputChange} />
                        
                        <br />
                        <br />
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
                        <br />
                        <br />
                        <label className="text-secondary">Postup přípravy:</label>
                        <TextArea  name="longDescription" label="Příprava" value={this.state.longDescription} onChange={this.handleInputChange} />

                        <br />
                        <br />
                        <Tagger label="Kategorie" onChange={this.handleCategoryChange} items={this.state.recipeCategories.map(x => ({
                            key: x.id,
                            value: x.name
                        }))} />
                        <br />
                        <Submit value="Upravit" />
                    </div>
                </div>
                
            </Form>
        </>
    }
}

function getRecipeLink(recipeId) {
    return `/edit/${recipeId}`;
}