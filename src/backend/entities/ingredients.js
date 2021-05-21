import { Entity } from "./entity.js";

export const tableName = "ingredients";

export class Ingredient extends Entity {
    constructor(name, id) {
        super(tableName);
        this.name = name;
        this.id = id;
    }
}