import React, { Component } from 'react';


export default class AddRecipe extends Component {
    render() {

        return <>
            <div class="contrainer-fluid">
                <form>

                    <div class="form-group">
                        <label for="exampleFormControlInput1" class="text-secondary">Název</label>
                        <input class="form-control" id="exampleFormControlInput1" data-role="tagsinput"/>
                    </div>

                    <div class="form-group">
                        <br />
                        <label for="exampleFormControlInput1" class="text-secondary">Kategorie</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Pečený</option>
                            <option>Nepečený</option>
                            <option>Vegan</option>
                        </select>
                    </div>
                    <div class="row">
                        <div class="col">

                            <label for="exampleFormControlInput1" class="text-secondary">Počet porcí</label>
                            <select type="text" class="form-control" placeholder="Počet porcí" aria-label="First name">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="col">

                            <label for="exampleFormControlInput1" class="text-secondary">Čas na přípravu</label>

                            <select type="text" class="form-control" placeholder="Čas na přípravu (min)" aria-label="First name">
                                <option>15</option>
                                <option>30</option>
                                <option>45</option>
                                <option>60</option>
                                <option>75</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <br />
                    <label for="exampleFormControlInput1" class="text-secondary">Příprava</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>
                    <br />
                    <button type="submit" class="btn btn-success" data-toggle="modal" data-target="#addForm" data-whatever="@mdo">Přidat recept</button>
                </form>
            </div>
        </>
    }
}
