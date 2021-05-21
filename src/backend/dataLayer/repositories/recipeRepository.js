import { Repository } from "./repository.js";
import * as Recipe from '../../entities/recipe.js'

class RecipeRepository extends Repository {
    constructor() {
        super(Recipe.tableName);
    }
}

export var recipeRepository = new RecipeRepository();