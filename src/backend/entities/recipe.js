import { Entity } from "./entity.js";

export const tableName = "recipe";

export class Recipe extends Entity {
    constructor(name, authorId, shortDescription, longDescription, preparationLength, servingSize, id) {
        super(tableName);
        this.name = name;
        this.authorId = authorId;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.preparationLength = preparationLength;
        this.servingSize = servingSize;
        this.id = id;
    }
}