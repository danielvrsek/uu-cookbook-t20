import { Author } from './entities/author.js'
import { Recipe } from './entities/recipe.js'
import { RecipeCategory } from './entities/recipeCategory.js'
import { RecipeIngredient } from './entities/recipeIngredient.js'
import { Ingredient } from './entities/ingredients.js'
import { unitOfWork } from './dataLayer/unitOfWork.js'
import { authorRepository } from './dataLayer/repositories/authorRepository.js'

export function seedData() {
    seedAuthors();
    seedIngredients();
    seedRecipeCategory();
    seedRecipe();

    unitOfWork.commit();
}

function seedAuthors() {
    let data = [
        new Author('Martin', 'Vesely', 'marty', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'),
        new Author('Kamil', 'Virag', 'kalda', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'),
        new Author('Jindrich', 'Jokel', 'jindra', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'),
        new Author('David', 'Machek', 'dejv', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'),
        new Author('Daniel', 'Vrsek', 'danielko', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08')
    ];
    unitOfWork.insertAll(data);
}

function seedIngredients() {
    let data = [
        new Ingredient("Vejce"),
        new Ingredient("Mouka")
    ];
    unitOfWork.insertAll(data);
}

function seedRecipeCategory() {
    var cakes = new RecipeCategory("Dorty");
    var cheesecakes = new RecipeCategory("Cheesecake");
    unitOfWork.insert(cakes);
    unitOfWork.insert(cheesecakes);

    unitOfWork.insertAll([
        new RecipeCategory("Cokoladove", cakes.id),
        new RecipeCategory("Ovocne", cheesecakes.id)
    ]);
}

function seedRecipe() {
    let data = [
        new Recipe("Vyborny cokoladovy dort", authorRepository.getAll()[1].id, "Kratky popis", "Dlouhy popis", "50min.", "5 porci")
    ];
    unitOfWork.insertAll(data);
}