import { authorizationService } from "../services/authorizationService.js";
import { Controller } from "./controller.js";

class AuthorizationController extends Controller {
    login(username, password) {
        let token = authorizationService.generateToken(username, password);

        return this.serialize(token);
    }
}

export var authorizationController = new AuthorizationController();