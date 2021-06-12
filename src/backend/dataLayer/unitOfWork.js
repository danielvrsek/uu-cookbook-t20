import { database, createKey } from "./database.js";

class UnitOfWork {
    insert(entity) {
        if (entity.id) {
            throw new Error(`Insert failed. Entity has id already defined. Entity: ${entity}`);
        }
        entity.id = createKey();

        let tableName = getTableName(entity);
        let table = getTable(tableName);
        table.insert(entity);
    }

    insertAll(entities) {
        for (let entity of entities) {
            this.insert(entity);
        }
    }

    update(entity) {
        if (!entity.id) {
            throw new Error(`Entity must have the id defined. Entity: ${JSON.stringify(entity)}`);
        }

        let tableName = getTableName(entity);
        let table = getTable(tableName);
        let result = table.getAll().filter(x => x.id === entity.id);
        if (result.length === 0) {
            throw new Error(`Update failed. Entity of type '${tableName}' with id '${entity.id}' does not exist`)
        }
        if (result.length > 1) {
            throw new Error(`Table '${tableName}' contains multiple entries with id '${entity.id}'`)
        }

        Object.assign(result[0], entity);
    }

    delete(entity) {
        let tableName = getTableName(entity);
        let table = getTable(tableName);
        table.delete(entity.id);
    }

    commitAsync() {
        return database.saveAsync();
    }
}

function getTableName(entity) {
    let type = entity["__type__"];
    if (!type) {
        throw new Error(`Invalid entity instance. Entity does not contain type: ${JSON.stringify(entity)}`);
    }

    return type;
}

function getTable(tableName) {
    let table = database.getTable(tableName);
    if (!table) {
        throw new Error(`Table '${tableName}' does not exist`);
    }

    return table;
}

export var unitOfWork = new UnitOfWork();