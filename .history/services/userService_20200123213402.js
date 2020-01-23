const bcrypt = require('bcrypt'),
    loginController = require('../controllers/loginController');
    ADMIN_HASH = '$2b$10$T8pqByvtNTTgFbPQMZJ0RerdqM9EmoaVxuN/oQbhX317No4oRnMa2'


verifyLogin = (username, password) => {
    if (username !== 'admin') {
        return Promise.resolve(false);
    }
    return bcrypt.compare(password, ADMIN_HASH)
}

module.exports = {
    verifyLogin
}