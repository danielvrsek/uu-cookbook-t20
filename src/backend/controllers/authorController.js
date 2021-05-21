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
        return this.serialize(authorRepository.getById(authorId));
    }

    createAuthor(input) {
        if (!input) {
            throw new ValidationError("Could not create author. Invalid input.");
        }

        this.validate(input);

        let author = new Author(input.firstName, input.lastName, input.username);
        unitOfWork.insert(author);
        unitOfWork.commit();
    }

    updateAuthor(authorId, input) {
        if (!input) {
            throw new ValidationError("Could not create author. Invalid input.");
        }

        this.validate(input);

        let author = authorRepository.getById(authorId);
        if (!author) {
            throw new ValidationError(`Could not update author. Author with id '${authorId}' does not exist`);
        }

        author.firstName = input.firstName;
        author.lastName = input.lastName;
        author.username = input.username;
        
        unitOfWork.update(author);
        unitOfWork.commit();
    }

    deleteAuthor(authorId) {
        let author = authorRepository.getById(authorId);
        if (!author) {
            throw new ValidationError(`Could not delete author. Author with id '${authorId}' does not exist`);
        }

        unitOfWork.delete(author);
        unitOfWork.commit();
    }

    validate(input) {
        let errors = [];

        if (!input.firstName) {
            errors.push("First name must be specified.");
        }

        if (!input.lastName) {
            errors.push("Last name must be specified.");
        }

        if (!input.username) {
            errors.push("Username must be specified.");
        }

        if (errors.length > 0) {
            throw new ValidationError("Failed to create author.\n" + errors.join('\n'));
        }
    }
}

export var authorController = new AuthorController();