import { Repository } from "./repository.js";
import * as Author from '../../entities/author.js'

class AuthorRepository extends Repository {
    constructor() {
        super(Author.tableName);
    }

    getByUsername(username) {
        let author = this.getAll().filter(x => x.username === username)[0];
        return author ? author : null;
    }
}

export var authorRepository = new AuthorRepository();