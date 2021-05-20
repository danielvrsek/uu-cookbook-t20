import { database, createKey } from './../database.js'

export const tableName = "recipe";

export function getTable() {
    return database.getTable(tableName);
}

export function getAll() {
    return getTable().getAll();
}

export function create(name, authorId, shortDescription, longDescription, prepararationLength, servingSize) {
    let data = {
        id: createKey(),
        name,
        authorId,
        shortDescription,
        longDescription,
        prepararationLength,
        servingSize
    };
    getTable().insert(data);

    return data;
}