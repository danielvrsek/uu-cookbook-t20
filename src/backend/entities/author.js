import { Entity } from "./entity.js";

export const tableName = "author";

export class Author extends Entity {
    constructor(firstName, lastName, username, password, id) {
        super(tableName);
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.id = id;
    }
}