import { authorRepository } from "../dataLayer/repositories/authorRepository.js";
import { AuthorizationError } from "../errors.js";
import { passwordUtils } from "./passwordUtils.js";

class AuthorizationService {
    generateToken(username, password) {
        if (!this.validateUser(username, password)) {
            throw new AuthorizationError("Authorization failed.");
        }

        let data = {
            username,
            role: "editor"
        };

        return this.serializeToken(data);
    }

    validateToken(token) {
        // Simple validation without source verification
        let data;
        try {
            data = this.deserializeToken(token);
        }
        catch (e) {
            console.warn(`Failed to parse token '${token}' with error '${e.toString()}`)
            return false;
        }

        if (data.role !== "editor"){
            console.warn(`User '${data.username}' does not have access with role ${data.role}`)
            return false;
        }

        return true;
    }

    getUsernameFromToken(token) {
        let data = this.deserializeToken(token);

        return data.username;
    }

    validateUser(username, password) {
        let author = authorRepository.getByUsername(username);
        if (!author) {
            console.warn(`Could not find author with username ${username}`);
            return false;
        }

        let passwordHash = passwordUtils.generateHash(password);
        if (author.password !== passwordHash) {
            console.warn(`Incorrect password for author ${username}`);
            return false;
        }

        return true;
    }

    serializeToken(data) {
        let buff = Buffer.from(JSON.stringify(data));
        return buff.toString('base64');
    }

    deserializeToken(token) {
        let buff = Buffer.from(token, 'base64');
        return JSON.parse(buff.toString('utf-8'));
    }
}

export var authorizationService = new AuthorizationService();