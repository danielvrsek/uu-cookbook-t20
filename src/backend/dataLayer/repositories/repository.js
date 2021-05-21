import { database } from './../database.js'

export class Repository {
    constructor(tableName) {
        this.tableName = tableName;
    }

    getTable() {
        return database.getTable(this.tableName);
    }

    getAll() {
        return this.getTable().getAll();
    }

    getById(id) {
        let result = this.getAll().filter(x => x.id === id);
        if (result.length <= 0) {
            throw new Error(`Could not find an entity of type '${this.tableName}' with id '${id}'`);
        }
        if (result.length > 1) {
            throw new Error(`There are multiple entries of type '${this.tableName}' with id '${id}'`);
        }

        return result[0];
    }
}