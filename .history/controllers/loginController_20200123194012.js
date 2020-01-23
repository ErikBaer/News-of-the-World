loginService = require('../services/loginService')

const renderLogin = (req, res) => {
    res.render('login', {
        header: 'Login',
        loginActive: true
    })
}

const getLogin = (req, res) => {
    renderLogin(req,res)
}

module.exports = {
    renderLogin
}