userService = require('../services/userService')

const renderLogin = (req, res) => {
    res.render('login', {
        header: 'Login',
        loginActive: true
    })
}

const submitLogin = (req, res) => {
    console.log(req.body);
    userService.verifyLogin(req.body.username, req.body.password)
        .then
    return renderLogin(req, res)
}

module.exports = {
    renderLogin,
    submitLogin
}