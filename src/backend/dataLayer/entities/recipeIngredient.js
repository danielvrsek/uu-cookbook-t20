import { database, createKey } from './../database.js'

export const tableName = "recipeIngredient";

export function getTable() {
    return database.getTable(tableName);
}

export function getAll() {
    return getTable().getAll();
}

export function create(ingredientId, amount) {
    let data = {
        id: createKey(),
        ingredientId,
        amount
    };
    getTable().insert(data);

    return data;
}