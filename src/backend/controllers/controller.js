export class Controller {
    serialize(data) {
        if (Array.isArray(data)) {
            return data.map(x => x.serialize());
        }

        return data.serialize();
    }
}