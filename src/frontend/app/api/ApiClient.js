class ApiClient {
    constructor(baseUri) {
        this.baseUri = baseUri;
    }

    login(credentials, callback) {
        this.fetchApi("POST", "/api/login", credentials, callback);
    }

    getRecipes(callback) {
        this.fetchApi("GET", "/api/recipes", null, callback);
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
            headers: (body && {
                "Token": "eyJ1c2VybmFtZSI6ImRhbmllbGtvIiwicm9sZSI6ImVkaXRvciJ9",
                "Content-Type": "application/json"
            }) || undefined,
            body: body && JSON.stringify(body)
        };
    
        return fetch(this.baseUri + url, options)
            .then((res) => res.json())
            .then((res) => callback(res.data));
    }
}

export var apiClient = new ApiClient("http://localhost:8080");