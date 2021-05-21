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
        new Author('Martin', 'Vesely', 'marty'),
        new Author('Kamil', 'Virag', 'kalda'),
        new Author('Jindrich', 'Jokel', 'jindra'),
        new Author('David', 'Machek', 'dejv'),
        new Author('Daniel', 'Vrsek', 'danielko')
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