import { authorRepository } from "../dataLayer/repositories/authorRepository.js";
import { recipeRepository } from "../dataLayer/repositories/recipeRepository.js";
import { unitOfWork } from "../dataLayer/unitOfWork.js";
import { Recipe } from "../entities/recipe.js";
import { ValidationError } from "../errors.js";
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

    async createRecipeAsync(input, context) {
        if (!input) {
            throw ValidationError("Recept nemohl být vytvořen. Nevalidní vstup.");
        }

        this.validate(input);

        let username = context.authorization.username;
        let author = authorRepository.getByUsername(username);
        if (!author) {
            throw new ValidationError("Neznámý autor.");
        }

        let recipe = new Recipe(input.title, author.id, input.longDescription, input.preparationLength, input.servingSize);
        unitOfWork.insert(recipe);
        await unitOfWork.commitAsync();
    }

    validate(input) {
        let errors = [];

        if (!input.title) {
            errors.push("Název receptu musí být vyplněn.");
        }

        if (!input.longDescription) {
            errors.push("Příprava receptu musí být vyplněna.");
        }

        if (!input.preparationLength) {
            errors.push("Čas na přípravu musí být vyplněna.");
        }

        if (!input.servingSize) {
            errors.push("Počet porcí musí být vyplněno.");
        }

        if (errors.length > 0) {
            throw new ValidationError("Nepodařilo se vytvořit recept.\n" + errors.join('\n'));
        }
    }
}

export var recipeController = new RecipeController();