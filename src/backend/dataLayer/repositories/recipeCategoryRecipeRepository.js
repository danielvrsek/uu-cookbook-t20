import { Repository } from "./repository.js";
import { tableName } from '../../entities/recipeRecipeCategory.js'

class RecipeRecipeCategoryRepository extends Repository {
    constructor() {
        super(tableName);
    }
}

export var recipeRecipeCategoryRepository = new RecipeRecipeCategoryRepository();