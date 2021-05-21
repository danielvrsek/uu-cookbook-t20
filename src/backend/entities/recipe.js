import { Entity } from "./entity.js";

export const tableName = "recipe";

export class Recipe extends Entity {
    constructor(name, authorId, shortDescription, longDescription, prepararationLength, servingSize, id) {
        super(tableName);
        this.name = name;
        this.authorId = authorId;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.prepararationLength = prepararationLength;
        this.servingSize = servingSize;
        this.id = id;
    }
}