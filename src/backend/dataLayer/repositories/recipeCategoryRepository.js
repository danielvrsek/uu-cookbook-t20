import { Repository } from "./repository.js";
import * as Recipe from '../../entities/recipeCategory.js'

class RecipeCategoryRepository extends Repository {
    constructor() {
        super(Recipe.tableName);
    }
}

export var recipeCategoryRepository = new RecipeCategoryRepository();