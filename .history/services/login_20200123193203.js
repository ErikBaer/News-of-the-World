loginController = require('loginController')

saveLogin = (req, res) => {
    loginController.renderLogin(req, res)
};

module.exports = {
    saveLogin
}