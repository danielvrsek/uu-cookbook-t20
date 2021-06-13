import { authorRepository } from "../dataLayer/repositories/authorRepository.js";
import { loginAccountRepository } from "../dataLayer/repositories/loginAccountRepository.js";
import { recipeRepository } from "../dataLayer/repositories/recipeRepository.js";
import { unitOfWork } from "../dataLayer/unitOfWork.js";
import { Recipe } from "../entities/recipe.js";
import { RecipeRecipeCategory } from "../entities/recipeRecipeCategory.js";
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

    getRecipes(recipeId) {
        let recipe = recipeRepository.getById(recipeId);
        if (!recipe) {
            throw new ValidationError(`Recept s id ${recipeId} neexistuje.`);
        }

        return this.serialize(recipe);
    }

    async createRecipeAsync(input, context) {
        if (!input) {
            throw ValidationError("Recept nemohl být vytvořen. Nevalidní vstup.");
        }

        this.validate(input);

        let username = context.authorization.username;
        let loginAccount = loginAccountRepository.getByUsername(username);
        if (!loginAccount) {
            throw new ValidationError("Neexistující uživatel.");
        }
        let author = authorRepository.getById(loginAccount.authorId);
        if (!author) {
            throw new ValidationError("Neexistující autor.");
        }

        let recipe = new Recipe(input.title, author.id, input.longDescription, input.preparationLength, input.servingSize);
        unitOfWork.insert(recipe);

        for (let categoryId of input.recipeCategories) {
            unitOfWork.insert(new RecipeRecipeCategory(recipe.id, categoryId));
        }

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

        if (!input.recipeCategories || !input.recipeCategories instanceof Array) {
            errors.push("Neplatná hodnota kategorie receptů.");
        }

        if (errors.length > 0) {
            throw new ValidationError("Nepodařilo se vytvořit recept.\n" + errors.join('\n'));
        }
    }
}

export var recipeController = new RecipeController();