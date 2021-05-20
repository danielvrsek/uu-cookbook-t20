import { database, createKey } from './../database.js'

export const tableName = "recipeCategory";

export function getTable() {
    return database.getTable(tableName);
}

export function getAll() {
    return getTable().getAll();
}

export function create(name, parentCategoryId) {
    let data = {
        id: createKey(),
        name,
        parentCategoryId
    };
    getTable().insert(data);

    return data;
}