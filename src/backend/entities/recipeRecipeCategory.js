import { Entity } from "./entity.js";

export const tableName = "recipeRecipeCategory";
    
export class RecipeRecipeCategory extends Entity {
    constructor(recipeId, recipeCategoryId, id) {
        super(tableName);
        this.recipeId = recipeId;
        this.recipeCategoryId = recipeCategoryId;
        this.id = id;
    }
}