import { tokenStorage } from "../utils/TokenStorage";

class ApiClient {
    constructor(baseUri) {
        this.baseUri = baseUri;
    }

    login(credentials, callback) {
        let tokenCallback = (res) => {
            tokenStorage.saveToken(res);
            callback(res);
        }

        this.fetchApi("POST", "/api/login", credentials, tokenCallback);
    }

    getRecipes(callback) {
        this.fetchApi("GET", "/api/recipes", null, callback);
    }

    getRecipe(recipeId, callback) {
        this.fetchApi("GET", `/api/recipes/${recipeId}`, null, callback);
    }

    editRecipe(recipeId, payload, callback) {
        this.fetchApi("PUT", `/api/recipes/${recipeId}`, payload, callback);
    }

    createRecipe(input, callback) {
        this.fetchApi("POST", "/api/recipes", input, callback);
    }

    getRecipeCategories(callback) {
        this.fetchApi("GET", "/api/recipeCategories", null, callback);
    }

    getAuthors(filter, callback) {
        this.fetchApi("GET", "/api/authors", null, callback);
    }

    getAuthor(authorId, callback) {
        this.fetchApi("GET", `/api/authors/${authorId}`, null, callback);
    }

    editAuthor(authorId, payload, callback) {
        this.fetchApi("PUT", `/api/authors/${authorId}`, payload, callback);
    }

    fetchApi(method, url, body, callback) {
        let options = {
            method,
            headers: {},
            body: body && JSON.stringify(body)
        };
        let token = tokenStorage.retrieveToken();
        console.log(token);
        if (token) {
            options.headers["Token"] = token;
        }
        if (body) {
            options.headers["Content-Type"] = "application/json";
        }
    
        return fetch(this.baseUri + url, options)
            .then((res) => res.json())
            .then((res) => callback(res.data));
    }
}

export var apiClient = new ApiClient("http://localhost:8080");