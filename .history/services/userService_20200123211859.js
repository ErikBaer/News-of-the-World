const bcrypt = require('bcrypt'),
    loginController = require('../controllers/loginController');
    ADMIN_HASH = '$2b$10$T8pqByvtNTTgFbPQMZJ0RerdqM9EmoaVxuN/oQbhX317No4oRnMa2'

saveLogin = (req, res) => {
    return loginController.renderLogin(req, res)
};

verifyLogin = (username, password) => {
    if (username !== 'admin') {
        return false;
    }
    if 
}

module.exports = {
    saveLogin
}