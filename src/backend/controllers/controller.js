export class Controller {
    serialize(data) {
        if (Array.isArray(data)) {
            return data.map(x => x.serialize());
        }

        if (data.serialize){
            data.serialize();
        }
        
        return data;
    }
}