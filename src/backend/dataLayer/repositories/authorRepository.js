import { Repository } from "./repository.js";
import * as Author from '../../entities/author.js'

class AuthorRepository extends Repository {
    constructor() {
        super(Author.tableName);
    }

    getRecipies(authorId) {
        return this.getAll().filter(x => x.authorId === authorId);
    }
}

export var authorRepository = new AuthorRepository();