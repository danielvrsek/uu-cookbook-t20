import { Author } from './entities/author.js'
import { Recipe } from './entities/recipe.js'
import { RecipeCategory } from './entities/recipeCategory.js'
import { unitOfWork } from './dataLayer/unitOfWork.js'
import { authorRepository } from './dataLayer/repositories/authorRepository.js'
import { RecipeRecipeCategory } from './entities/recipeRecipeCategory.js'
import { recipeRepository } from './dataLayer/repositories/recipeRepository.js'
import { recipeCategoryRepository } from './dataLayer/repositories/recipeCategoryRepository.js'
import { LoginAccount } from './entities/loginAccount.js'

export async function seedDataAsync() {
    seedAuthors();
    seedLoginAccounts();
    seedRecipeCategory();
    seedRecipe();
    seedRecipeCategoryRecipe();

    await unitOfWork.commitAsync();
}

function seedAuthors() {
    let data = [
        new Author('Martin', 'Vesely'),
        new Author('Kamil', 'Virag'),
        new Author('Jindrich', 'Jokel'),
        new Author('David', 'Machek'),
        new Author('Daniel', 'Vrsek')
    ];
    unitOfWork.insertAll(data);
}

function seedLoginAccounts() {
    let authors = authorRepository.getAll();

    let data = [
        new LoginAccount(authors[0].id, 'marty', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'),
        new LoginAccount(authors[1].id, 'kalda', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'),
        new LoginAccount(authors[2].id, 'jindra', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'),
        new LoginAccount(authors[3].id, 'dejv', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'),
        new LoginAccount(authors[4].id, 'danielko', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08')
    ];
    unitOfWork.insertAll(data);
}

function seedRecipeCategory() {
    var cakes = new RecipeCategory("Dorty");
    var cheesecakes = new RecipeCategory("Cheesecake");
    unitOfWork.insert(cakes);
    unitOfWork.insert(cheesecakes);

    unitOfWork.insertAll([
        new RecipeCategory("Bezlepkové"),
        new RecipeCategory("Vegetarianské"),
        new RecipeCategory("Veganské"),
        new RecipeCategory("Nízký obsah cukru"),
        new RecipeCategory("Bez laktózy"),
        new RecipeCategory("Fitness"),
        new RecipeCategory("Levné recepty"),
        new RecipeCategory("Čokoládové", cakes.id),
        new RecipeCategory("Ovocné", cheesecakes.id)
    ]);
}

function seedRecipe() {
    let authors = authorRepository.getAll();

    let data = [
        new Recipe("Cokoladovy dort", authors[0].id, "Dlouhy popis", 50, 5),
        new Recipe("Slehackovy dort", authors[1].id, "Dlouhy popis", 50, 5),
        new Recipe("Babovka", authors[1].id, "Dlouhy popis", 50, 5),
        new Recipe("Malinovy chesecake", authors[2].id, "Dlouhy popis", 50, 5),
        new Recipe("Chesecake z lesnich plodu", authors[0].id, "Dlouhy popis", 50, 5),
        new Recipe("Misarezy", authors[3].id, "Dlouhy popis", 50, 5)
    ];
    unitOfWork.insertAll(data);
}

function seedRecipeCategoryRecipe() {
    let recipeCategories = recipeCategoryRepository.getAll();
    let recipes = recipeRepository.getAll();

    let data = [
        new RecipeRecipeCategory(recipes[0].id, recipeCategories[0].id),
        new RecipeRecipeCategory(recipes[0].id, recipeCategories[1].id),
        new RecipeRecipeCategory(recipes[0].id, recipeCategories[2].id),

        new RecipeRecipeCategory(recipes[1].id, recipeCategories[0].id),
        new RecipeRecipeCategory(recipes[1].id, recipeCategories[3].id),
        new RecipeRecipeCategory(recipes[1].id, recipeCategories[5].id),

        new RecipeRecipeCategory(recipes[2].id, recipeCategories[6].id),

        new RecipeRecipeCategory(recipes[3].id, recipeCategories[4].id),
        new RecipeRecipeCategory(recipes[3].id, recipeCategories[5].id),
        new RecipeRecipeCategory(recipes[3].id, recipeCategories[8].id),
    ];
    unitOfWork.insertAll(data);
}