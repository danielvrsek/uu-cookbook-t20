import React, { Component } from 'react';
import './Recipe.css';
import { A } from '@patched/hookrouter';

export default class Recipe extends Component {

    render() {
        return (
            <div>
                <br/>
                <A href="/addrecipe"><button type="submit" class="btn btn-success" data-toggle="modal" data-target="#addForm" data-whatever="@mdo">Přidat recept</button></A>
            </div>
        );
    }
}