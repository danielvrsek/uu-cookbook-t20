import { Entity } from "./entity.js";

export const tableName = "recipeCategory";
    
export class RecipeCategory extends Entity {
    constructor(name, parentCategoryId, id) {
        super(tableName);
        this.name = name;
        this.parentCategoryId = parentCategoryId;
        this.id = id;
    }
}