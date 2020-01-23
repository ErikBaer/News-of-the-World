loginService = require('loginService')

const renderLogin = (req, res) => {
    res.render('login', {
        header: 'Login',
        loginActive: true
    })
}

const getLogin = (req, res) => {
    saveLogin(req,res)
}

module.exports = {
    renderLogin
}