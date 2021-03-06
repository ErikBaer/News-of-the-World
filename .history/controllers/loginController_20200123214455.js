userService = require('../services/userService')

const renderLogin = (req, res) => {
    res.render('login', {
        header: 'Login',
        loginActive: true,
        loginFailed: req.body.loginFailed;
    })
}

const submitLogin = (req, res) => {
    userService.verifyLogin(req.body.username, req.body.password)
        .then(loginSuccess => {
            if(loginSuccess) {
                res.redirect('/settings')
            } else {
                req.body.loginFailed= true;
                renderLogin(req, res);
            }
        })
    
}

module.exports = {
    renderLogin,
    submitLogin
}