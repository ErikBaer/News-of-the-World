loginController = require('../controllers/loginController')

saveLogin = (req, res) => {
    return loginController.renderLogin(req, res)
};

module.exports = {
    saveLogin
}