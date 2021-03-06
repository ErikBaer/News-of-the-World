userService = require('../services/userService')

const renderLogin = (req, res) => {
    res.render('login', {
        header: 'Login',
        loginActive: true
    })
}

const submitLogin = (req, res) => {
    userService.verifyLogin(req.body.username, req.body.password)
        .then(loginSuccess => {
            if(loginSuccess) {
                res.redirect('/settings')
            } else {
                renderLogin(req, res);
            }
        })
    return renderLogin(req, res)
}

module.exports = {
    renderLogin,
    submitLogin
}