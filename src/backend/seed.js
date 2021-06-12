import { Author } from './entities/author.js'
import { Recipe } from './entities/recipe.js'
import { RecipeCategory } from './entities/recipeCategory.js'
import { RecipeIngredient } from './entities/recipeIngredient.js'
import { Ingredient } from './entities/ingredients.js'
import { unitOfWork } from './dataLayer/unitOfWork.js'
import { authorRepository } from './dataLayer/repositories/authorRepository.js'

export async function seedDataAsync() {
    seedAuthors();
    seedIngredients();
    seedRecipeCategory();
    seedRecipe();

    await unitOfWork.commitAsync();
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
    let authors = authorRepository.getAll();

    let data = [
        new Recipe("Cokoladovy dort", authors[0].id, "Kratky popis", "Dlouhy popis", 50, 5),
        new Recipe("Slehackovy dort", authors[1].id, "Kratky popis", "Dlouhy popis", 50, 5),
        new Recipe("Babovka", authors[1].id, "Kratky popis", "Dlouhy popis", 50, 5),
        new Recipe("Malinovy chesecake", authors[2].id, "Kratky popis", "Dlouhy popis", 50, 5),
        new Recipe("Chesecake z lesnich plodu", authors[0].id, "Kratky popis", "Dlouhy popis", 50, 5),
        new Recipe("Misarezy", authors[3].id, "Kratky popis", "Dlouhy popis", 50, 5)
    ];
    unitOfWork.insertAll(data);
}