class ApiClient {
    constructor(baseUri) {
        this.baseUri = baseUri;

        this.login = this.login.bind(this);
        this.fetchApi = this.fetchApi.bind(this);
    }

    login(credentials, callback) {
        callback = (res) => {
            this.token = res;
            callback(res);
        }

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
            headers: {},
            body: body && JSON.stringify(body)
        };
        if (this.token) {
            options.headers["Token"] = this.token;
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