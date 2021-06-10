import crypto from 'crypto';

class PasswordUtils {
    generateHash(password) {
        return crypto.createHash('sha256').update(password).digest('hex');
    }
}

export var passwordUtils = new PasswordUtils();