import { authorController } from "./controllers/authorController.js";
import { authorizationController } from "./controllers/authorizationController.js";
import { recipeController } from "./controllers/recipeController.js";
import { ValidationError } from "./errors.js"
import { authorizationService } from "./services/authorizationService.js";

export function declareEndpoints(app) {
    // ******** AUTHORS ********
    app.get('/api/authors', function (req, res) {
        handleResponse(res, () => authorController.getAuthors(req.query));
    });

    app.get('/api/authors/:authorId', function (req, res) {
        handleResponse(res, () => authorController.getAuthor(req.params.authorId));
    });

    app.put('/api/authors', function (req, res) {
        handleAuthorizedResponse(req, res, () => authorController.createAuthor(req.body));
    });

    app.post('/api/authors/:authorId', function (req, res) {
        handleAuthorizedResponse(req, res, () => authorController.updateAuthor(req.params.authorId, req.body));
    });

    app.delete('/api/authors/:authorId', function (req, res) {
        handleAuthorizedResponse(req, res, () => authorController.deleteAuthor(req.params.authorId));
    });
    // ******** AUTHORS ********

    // ******** RECIPES ********
    app.get('/api/recipes', function (req, res) {
        handleResponse(res, () => recipeController.getRecipes(req.query));
    });
    // ******** RECIPES ********

    // ******** AUTHORIZATION ********
    app.post('/api/login', function (req, res) {
        handleResponse(res, () => authorizationController.login(req.body.username, req.body.password));
    });
    // ******** AUTHORIZATION ********

 }

 function handleAuthorizedResponse(req, res, handler) {
    let token = req.header("Token");
    if (!token || authorizationService.validateToken(token)) {
        res.status(401).send();
        return;
    }

    handleResponse(res, handler);
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