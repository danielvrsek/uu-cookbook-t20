import { Entity } from "./entity.js";

export const tableName = "recipeIngredient";

export class RecipeIngredient extends Entity {
    constructor(ingredientId, recipeId, amount, id) {
        super(tableName);
        this.ingredientId = ingredientId;
        this.recipeId = recipeId;
        this.amount = amount;
        this.id = id;
    }
}