import { authorController } from "./controllers/authorController.js";
import { recipeController } from "./controllers/recipeController.js";
import { ValidationError } from "./errors.js"

export function declareEndpoints(app) {
    // ******** AUTHORS ********
    app.get('/api/authors', function (req, res) {
        handleResponse(res, () => authorController.getAuthors(req.query));
    });

    app.get('/api/authors/:authorId', function (req, res) {
        handleResponse(res, () => authorController.getAuthor(req.params.authorId));
    });

    app.put('/api/authors', function (req, res) {
        handleResponse(res, () => authorController.createAuthor(req.body));
    });

    app.post('/api/authors/:authorId', function (req, res) {
        handleResponse(res, () => authorController.updateAuthor(req.params.authorId, req.body));
    });

    app.delete('/api/authors/:authorId', function (req, res) {
        handleResponse(res, () => authorController.deleteAuthor(req.params.authorId));
    });
    // ******** AUTHORS ********

    // ******** RECIPES ********
    app.get('/api/recipes', function (req, res) {
        handleResponse(res, () => recipeController.getRecipes(req.query));
    });
    // ******** RECIPES ********
 }

 function handleResponse(res, handler) {
    try {
        let result = handler();
        res.send({
            result: "OK",
            data: result
        });
    }
    catch (err) {
        console.error(err.stack);

        if (err instanceof ValidationError) {
            res.status(400).send({
                result: "ERROR",
                error: {
                    message: err.message
                }
            });
        }
        else {
            res.status(500).send({
                result: "INTERNAL_ERROR"
            });
        }
    }
 }