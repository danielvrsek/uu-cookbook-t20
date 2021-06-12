import { Repository } from "./repository.js";
import * as LoginAccount from '../../entities/loginAccount.js'

class LoginAccountRepository extends Repository {
    constructor() {
        super(LoginAccount.tableName);
    }

    getByUsername(username) {
        let loginAccount = this.getAll().filter(x => x.username === username)[0];
        return loginAccount ? loginAccount : null;
    }
}

export var loginAccountRepository = new LoginAccountRepository();