import { Entity } from "./entity.js";

export const tableName = "recipe";

export class Recipe extends Entity {
    constructor(title, authorId, longDescription, preparationLength, servingSize, thumbnail, id) {
        super(tableName);
        this.title = title;
        this.authorId = authorId;
        this.longDescription = longDescription;
        this.preparationLength = preparationLength;
        this.servingSize = servingSize;
        this.thumbnail = thumbnail;
        this.id = id;
    }
}