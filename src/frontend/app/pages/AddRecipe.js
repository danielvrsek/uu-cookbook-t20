import React, { Component } from 'react';
import { apiClient } from '../api/ApiClient';
import NumberInput from '../common/forms/NumberInput';
import Submit from '../common/forms/Submit';
import TextInput from '../common/forms/TextInput';
import Select from '../common/forms/Select';
import { Form } from '../common/forms/Form';


export default class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        apiClient.getRecipeCategories((data) => this.setState({ ...this.state, recipeCategories: data }))
    }

    handleInputChange(name, value) {
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const data = {
            title: this.state.title,
            servingSize: this.state.servingSize,
            preparationLength: this.state.preparationLength,
            longDescription: this.state.longDescription
        }

        apiClient.createRecipe(this.state, data, () => { })
        event.preventDefault();
    }

    render() {
        
        if (!this.state.recipeCategories) {
            return "Loading..."
        }

        return <>
            <Form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <h1>Nový recept</h1>
                        <br></br>
                        <TextInput  name="title" label="Název" value={this.state.title} onChange={this.handleInputChange} />
                        <br />
                        <br />
                        <Select onChange={this.handleInputChange} data={this.state.recipeCategories.map(x => ({
                            key: x.id,
                            value: x.name
                        }))} />
                        <br />

                        <NumberInput name="servingSize" label="Počet porcí" value={this.state.servingSize} onChange={this.handleInputChange} />
                        <br />
                        <br />
                        <NumberInput name="preparationLength" label="Čas na přípravu" value={this.state.preparationLength} onChange={this.handleInputChange} />

                        <br />
                        <br />

                        <TextInput  name="longDescription" label="Příprava" value={this.state.longDescription} onChange={this.handleInputChange} />

                        <br />
                        <br />
                        <Submit value="Přidat" />
                    </div>
                </div>
            </Form>
        </>
    }
}