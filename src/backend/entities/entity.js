export class Entity {
    constructor(tableName) {
        this["__type__"] = tableName;
    }

    serialize() {
        let result = Object.assign({}, this);
        result["__type__"] = undefined;

        return result;
    }
}