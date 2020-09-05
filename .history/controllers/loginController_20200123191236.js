const renderLogin = (req, res) => {
    res.render('login', {
        header: 'Login',
        loginActive: true
    })
}

module.exports = {
    renderLogin
}