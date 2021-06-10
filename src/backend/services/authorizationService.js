import { authorRepository } from "../dataLayer/repositories/authorRepository.js";
import { AuthorizationError } from "../errors.js";
import { passwordUtils } from "./passwordUtils.js";

class AuthorizationService {
    generateToken(username, password) {
        if (!this.validateUser(username, password)) {
            throw new AuthorizationError("Authorization failed.");
        }

        let buff = Buffer.from(JSON.stringify({
            username,
            role: "editor"
        }));
        return buff.toString('base64');
    }

    validateToken(token) {
        // Simple validation without source verification
        let buff = Buffer.from(token, 'base64');
        let data;
        try {
            data = JSON.parse(buff.toString('utf-8'));
        }
        catch (e) {
            return false;
        }

        if (data.role !== "editor"){
            return false;
        }

        return true;
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
}

export var authorizationService = new AuthorizationService();