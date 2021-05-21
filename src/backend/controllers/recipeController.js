import { recipeRepository } from "../dataLayer/repositories/recipeRepository.js";
import { Controller } from "./controller.js";

class RecipeController extends Controller {
    getRecipes(filter) {
        let data = recipeRepository.getAll();
        if (!filter) {
            return this.serialize(data);
        }

        if (filter.authorId) {
            data = data.filter(x => x.authorId === filter.authorId);
        }

        return this.serialize(data);
    }
}

export var recipeController = new RecipeController();