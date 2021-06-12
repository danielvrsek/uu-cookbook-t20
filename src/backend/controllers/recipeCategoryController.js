import { recipeCategoryRepository } from "../dataLayer/repositories/recipeCategoryRepository.js";
import { Controller } from "./controller.js";

class RecipeCategoryController extends Controller {
    getRecipeCategories() {
        let data = recipeCategoryRepository.getAll();

        return this.serialize(data);
    }
}

export var recipeCategoryController = new RecipeCategoryController();