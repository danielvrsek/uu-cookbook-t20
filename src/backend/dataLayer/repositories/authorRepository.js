import { Repository } from "./repository.js";
import * as Author from '../../entities/author.js'

class AuthorRepository extends Repository {
    constructor() {
        super(Author.tableName);
    }
}

export var authorRepository = new AuthorRepository();