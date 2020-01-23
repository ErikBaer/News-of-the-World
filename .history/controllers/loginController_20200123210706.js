loginService = require('../services/userService')

const renderLogin = (req, res) => {
    res.render('login', {
        header: 'Login',
        loginActive: true
    })
}

const getLogin = (req, res) => {
    console.log(req.body);
    return userService.saveLogin(req,res)
}

module.exports = {
    renderLogin,
    getLogin
}