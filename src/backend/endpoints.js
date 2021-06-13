import { authorController } from "./controllers/authorController.js";
import { authorizationController } from "./controllers/authorizationController.js";
import { recipeCategoryController } from "./controllers/recipeCategoryController.js";
import { recipeController } from "./controllers/recipeController.js";
import { AuthorizationError, ValidationError } from "./errors.js"
import { authorizationService } from "./services/authorizationService.js";

export function declareEndpoints(app) {
    // ******** AUTHORS ********
    app.get('/api/authors', function (req, res) {
        handleResponseAsync(res, () => authorController.getAuthors(req.query));
    });

    app.get('/api/authors/:authorId', function (req, res) {
        handleResponseAsync(res, () => authorController.getAuthor(req.params.authorId));
    });

    app.post('/api/authors', function (req, res) {
        handleAuthorizedResponseAsync(req, res, () => authorController.createAuthorAsync(req.body));
    });

    app.put('/api/authors/:authorId', function (req, res) {
        handleAuthorizedResponseAsync(req, res, () => authorController.updateAuthorAsync(req.params.authorId, req.body));
    });

    app.delete('/api/authors/:authorId', function (req, res) {
        handleAuthorizedResponseAsync(req, res, () => authorController.deleteAuthorAsync(req.params.authorId));
    });
    // ******** AUTHORS ********

    // ******** RECIPES ********
    app.get('/api/recipes', function (req, res) {
        handleResponseAsync(res, () => recipeController.getRecipes(req.query));
    });

    app.get('/api/recipes/:recipeId', function (req, res) {
        handleResponseAsync(res, () => recipeController.getRecipe(req.params.recipeId));
    });

    app.post('/api/recipes', function (req, res) {
        handleAuthorizedResponseAsync(req, res, (context) => recipeController.createRecipeAsync(req.body, context));
    });

    app.put('/api/recipes/:recipeId', function (req, res) {
        handleAuthorizedResponseAsync(req, res, (context) => recipeController.updateRecipeAsync(req.params.recipeId, req.body, context));
    });    
    // ******** RECIPES ********

    // ******** RECIPE CATEGORIES ********
    app.get('/api/recipeCategories', function (req, res) {
        handleResponseAsync(res, () => recipeCategoryController.getRecipeCategories());
    });
    // ******** RECIPE CATEGORIES ********

    // ******** AUTHORIZATION ********
    app.post('/api/login', function (req, res) {
        handleResponseAsync(res, () => authorizationController.login(req.body.username, req.body.password));
    });
    // ******** AUTHORIZATION ********
 }

 async function handleAuthorizedResponseAsync(req, res, handler) {
    let token = req.header("Token");
    if (!token || !authorizationService.validateToken(token)) {
        console.warn(`Invalid token '${token}'`)
        res.status(401).send();
        return;
    }

    let context = {
        authorization: {
            username: authorizationService.getUsernameFromToken(token)
        }
    }
    await handleResponseAsync(res, handler, context);
 }

 async function handleResponseAsync(res, handler, context) {
    context = context ?? {};

    try {
        let result = handler(context);
        if (result instanceof Promise) {
            result = await result;
        }

        res.send({
            result: "OK",
            data: result
        });
    } catch (err) {
        console.error(err.stack);

        if (err instanceof ValidationError) {
            res.status(400).send({
                result: "ERROR",
                error: {
                    message: err.message
                }
            });
        }
        else if (err instanceof AuthorizationError) {
            res.status(401).send();
        }
        else {
            res.status(500).send({
                result: "INTERNAL_ERROR"
            });
        }
    }
 }