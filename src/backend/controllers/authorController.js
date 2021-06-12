import { Author } from "../entities/author.js";
import { authorRepository } from "../dataLayer/repositories/authorRepository.js";
import { unitOfWork } from "../dataLayer/unitOfWork.js";
import { ValidationError } from "../errors.js";
import { Controller } from "./controller.js";

class AuthorController extends Controller {
    getAuthors(filter) {
        let data = authorRepository.getAll();
        if (!filter) {
            return this.serialize(data);
        }

        return this.serialize(data);
    }

    getAuthor(authorId) {
        let author = authorRepository.getById(authorId);
        if (!author) {
            throw new ValidationError(`Autor s id ${authorId} neexistuje.`);
        }

        return this.serialize(author);
    }

    async createAuthorAsync(input) {
        if (!input) {
            throw new ValidationError("Nelze vytvořit autora. Nevalidní vstup.");
        }

        this.validate(input);

        let author = new Author(input.firstName, input.lastName, input.username);
        unitOfWork.insert(author);
        await unitOfWork.commitAsync();
    }

    async updateAuthorAsync(authorId, input) {
        if (!input) {
            throw new ValidationError("Nelze upravit autora. Nevalidní vstup.");
        }

        this.validate(input);

        let author = authorRepository.getById(authorId);
        if (!author) {
            throw new ValidationError(`Nelze upravit autora. Autor s id '${authorId}' neexistuje`);
        }

        author.firstName = input.firstName;
        author.lastName = input.lastName;
        author.username = input.username;
        
        unitOfWork.update(author);
        await unitOfWork.commitAsync();
    }

    async deleteAuthorAsync(authorId) {
        if (!authorId) {
            throw new ValidationError("Nelze smazat autora. Nevalidní vstup.");
        }

        let author = authorRepository.getById(authorId);
        if (!author) {
            throw new ValidationError(`Nelze smazat autora. Autor s id '${authorId}' neexistuje`);
        }

        unitOfWork.delete(author);
        await unitOfWork.commitAsync();
    }

    validate(input) {
        let errors = [];

        if (!input.firstName) {
            errors.push("Jméno musí být vyplněno.");
        }

        if (!input.lastName) {
            errors.push("Přijimení musí být vyplněno.");
        }

        if (!input.username) {
            errors.push("Uživatelské jméno musí být vyplněno.");
        }

        if (errors.length > 0) {
            throw new ValidationError("Nelze vytvořit autora.\n" + errors.join('\n'));
        }
    }
}

export var authorController = new AuthorController();