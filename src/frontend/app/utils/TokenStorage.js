class TokenStorage {
    constructor() {
        this.callbacks = [];
    }

    saveToken(token) {
        window.sessionStorage.accessToken = token;

        this.callbacks.forEach(callback => callback(token));
    }

    retrieveToken() {
        return window.sessionStorage.accessToken;
    }

    removeToken() {
        window.sessionStorage.accessToken = null;

        this.callbacks.forEach(callback => callback(null));
    }

    subscribe(callback) {
        this.callbacks.push(callback);
    }
}

export var tokenStorage = new TokenStorage();