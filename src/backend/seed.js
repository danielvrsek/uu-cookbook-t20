import * as Author from './dataLayer/entities/author.js'
import * as Recipe from './dataLayer/entities/recipe.js'
import * as RecipeCategory from './dataLayer/entities/recipeCategory.js'
import * as RecipeIngredient from './dataLayer/entities/recipeIngredient.js'
import * as Ingredients from './dataLayer/entities/ingredients.js'

export function seedData() {
    seedAuthors();
    seedIngredients();
    seedRecipeCategory();
    seedRecipe();
}

function seedAuthors() {
    Author.create('Martin', 'Vesely', 'marty');
    Author.create('Kamil', 'Virag', 'kalda');
    Author.create('Jindrich', 'Jokel', 'jindra');
    Author.create('David', 'Machek', 'dejv');
    Author.create('Daniel', 'Vrsek', 'danielko');
}

function seedIngredients() {
    Ingredients.create("Vejce");
    Ingredients.create("Mouka");
}

function seedRecipeCategory() {
    var cakes = RecipeCategory.create("Dorty");
    var cheesecakes = RecipeCategory.create("Cheesecake");

    RecipeCategory.create("Cokoladove", cakes.id);
    RecipeCategory.create("Ovocne", cheesecakes.id);
}

function seedRecipe() {
    Recipe.create("Vyborny cokoladovy dort", Author.getAll()[1].id, "Kratky popis", "Dlouhy popis", "50min.", "5 porci")
}