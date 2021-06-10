import crypto from 'crypto';

class PasswordUtils {
    generateHash(password) {
        var hash = crypto.createHash('sha256').update(password).digest('hex');
        console.log(hash);
    }
}

export var passwordUtils = new PasswordUtils();