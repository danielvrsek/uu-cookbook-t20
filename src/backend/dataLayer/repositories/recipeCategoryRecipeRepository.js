import { Repository } from "./repository.js";
import { tableName } from '../../entities/recipeRecipeCategory.js'

class RecipeRecipeCategoryRepository extends Repository {
    constructor() {
        super(tableName);
    }

    getForRecipe(recipeId) {
        return this.getAll().filter(x => x.recipeId === recipeId);
    }
}

export var recipeRecipeCategoryRepository = new RecipeRecipeCategoryRepository();