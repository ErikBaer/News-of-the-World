loginService = require('../services/loginService')

const renderLogin = (req, res) => {
    res.render('login', {
        header: 'Login',
        loginActive: true
    })
}

const getLogin = (req, res) => {
    loginService.getLogin(req,res)
}

module.exports = {
    renderLogin,
    getLogin
}