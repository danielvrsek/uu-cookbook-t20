class ApiClient {
    constructor(baseUri) {
        this.baseUri = baseUri;
    }

    getAuthors(filter, callback) {
        this.fetchApi("GET", "/api/authors", callback);
    }

    fetchApi(method, url, callback) {
        let options = {
            method
        };
    
        return fetch(baseUri + url, options)
            .then((res) => res.json())
            .then((res) => callback(res.data));
    }
}

export var apiClient = new ApiClient("http://localhost:8080");