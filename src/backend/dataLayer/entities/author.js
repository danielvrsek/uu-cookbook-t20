import * as Recipe from './recipe.js'
import { database, createKey } from './../database.js'

export const tableName = "author";

export function getTable() {
    return database.getTable(tableName);
}

export function getAll() {
    return getTable().getAll();
}

export function getRecipies(authorId) {
    return Recipe.getAll().filter(x => x.authorId === authorId);
}

export function create(firstName, lastName, username) {
    let data = {
        id: createKey(),
        firstName,
        lastName,
        username
    };
    getTable().insert(data);

    return data;
}