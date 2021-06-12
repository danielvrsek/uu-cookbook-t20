import { Entity } from "./entity.js";

export const tableName = "loginAccount";

export class LoginAccount extends Entity {
    constructor(authorId, username, password, id) {
        super(tableName);
        this.authorId = authorId;
        this.username = username;
        this.password = password;
        this.id = id;
    }
}