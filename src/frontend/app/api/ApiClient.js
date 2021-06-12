class ApiClient {
    constructor(baseUri) {
        this.baseUri = baseUri;
    }

    getRecipes(callback) {
        this.fetchApi("GET", "/api/recipes", null, callback);
    }

    getAuthors(filter, callback) {
        this.fetchApi("GET", "/api/authors", null, callback);
    }

    getAuthor(authorId, callback) {
        this.fetchApi("GET", `/api/authors/${authorId}`, null, callback);
    }

    editAuthor(authorId, payload, callback) {
        this.fetchApi("POST", `/api/authors/${authorId}`, payload, callback);
    }

    fetchApi(method, url, body, callback) {
        let options = {
            method,
            headers: (body && {
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