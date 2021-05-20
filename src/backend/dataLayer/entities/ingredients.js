import { database, createKey } from './../database.js'

export const tableName = "ingredients";

export function getTable() {
    return database.getTable(tableName);
}

export function getAll() {
    return getTable().getAll();
}

export function create(name) {
    let data = {
        id: createKey(),
        name
    };
    getTable().insert(data);

    return data;
}