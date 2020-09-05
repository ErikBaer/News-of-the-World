loginService = require('../services/loginService')

const renderLogin = (req, res) => {
    res.render('login', {
        header: 'Login',
        loginActive: true
    })
}

const getLogin = (req, res) => {
    loginService.saveLogin(req,res)
}

module.exports = {
    renderLogin,
    getLogin
}