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
    unitOfWork.insertAll([
        new RecipeCategory("Dorty"),
        new RecipeCategory("Cheesecake"),
        new RecipeCategory("Bezlepkové"),
        new RecipeCategory("Vegetarianské"),
        new RecipeCategory("Veganské"),
        new RecipeCategory("Nízký obsah cukru"), // 5
        new RecipeCategory("Bez laktózy"),
        new RecipeCategory("Fitness"),
        new RecipeCategory("Levné recepty"),
        new RecipeCategory("Čokoládové"),
        new RecipeCategory("Ovocné"), // 10
        new RecipeCategory("Pečené"),
        new RecipeCategory("Nepečené"),
        new RecipeCategory("Dezerty"),
    ]);
}

function seedRecipe() {
    let authors = authorRepository.getAll();

    let data = [
        new Recipe("Extra čokoládový cheesecake s malinami", authors[0].id, "Jednoduché, rychlé a velmi chutné. Pokud jste milovníkem čokolády, doporučuji vyzkoušet. Zamilujete se. Čokoládový mascarpone krém, na vrchu jemná čokoládová poleva, která se při krájení vůbec neláme a jako při každém cheesecaku, sušenkový křupavý základ.", 35, 4, "58347411_71564828563b06_680.jpg"),
        new Recipe("Tříbarevný dort bez pečení", authors[1].id, "Neobvyklý dezert, který si zamilujete. Nejen kvůli rychlé přípravě, ale také díky osvěžující chuti, která během teplých letních dnů jistě potěší. Bez pečení, bez želatiny, bez zdlouhavé přípravy. Opravdu za 15 minut to máte připraveno ve formě a už jen vyčkat, dokud to ztuhne.", 15, 3, "76857705_523e1114e9e906_680.jpg"),
        new Recipe("Lotusové dortíčky", authors[1].id, "Znáte sušenky Lotus? Vyzkoušejte připravit tento fantastický dezert.", 55, 4, "56805520_10a417285b8ff5_680.jpg"),
        new Recipe("Malinovy chesecake", authors[2].id, "Dlouhy popis", 50, 5, "rasp_cheesecake.jpg"),
        new Recipe("Chesecake z lesnich plodu", authors[0].id, "Dlouhy popis", 50, 5, "h389w574t.jpg"),
        new Recipe("Misarezy", authors[3].id, "Dlouhy popis", 50, 5, "misarezy.jpg")
    ];
    unitOfWork.insertAll(data);
}

function seedRecipeCategoryRecipe() {
    let recipeCategories = recipeCategoryRepository.getAll();
    let recipes = recipeRepository.getAll();

    let data = [
        new RecipeRecipeCategory(recipes[0].id, recipeCategories[1].id),
        new RecipeRecipeCategory(recipes[0].id, recipeCategories[9].id),
        new RecipeRecipeCategory(recipes[0].id, recipeCategories[10].id),

        new RecipeRecipeCategory(recipes[1].id, recipeCategories[0].id),
        new RecipeRecipeCategory(recipes[1].id, recipeCategories[12].id),

        new RecipeRecipeCategory(recipes[2].id, recipeCategories[12].id),
        new RecipeRecipeCategory(recipes[2].id, recipeCategories[13].id),

        new RecipeRecipeCategory(recipes[3].id, recipeCategories[4].id),
        new RecipeRecipeCategory(recipes[3].id, recipeCategories[5].id),
        new RecipeRecipeCategory(recipes[3].id, recipeCategories[8].id),
    ];
    unitOfWork.insertAll(data);
}