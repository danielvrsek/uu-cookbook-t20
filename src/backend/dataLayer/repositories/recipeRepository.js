import { Repository } from "./repository.js";
import * as Recipe from '../../entities/recipe.js'

class RecipeRepository extends Repository {
    constructor() {
        super(Recipe.tableName);
    }

    getRecipies(authorId) {
        return this.getAll().filter(x => x.authorId === authorId);
    }
}

export var recipeRepository = new RecipeRepository();