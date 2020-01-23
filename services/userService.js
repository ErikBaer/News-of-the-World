const bcrypt = require('bcrypt'),
    loginController = require('../controllers/loginController');

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