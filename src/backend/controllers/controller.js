export class Controller {
    serialize(authors) {
        return authors.map(x => x.serialize());
    }
}