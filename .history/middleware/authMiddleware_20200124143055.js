const auth = (req, res, next) => {
if (req.sessinon && req.session.isLoggedIn===true) {
    console.log('User is logged in')
    next();
}else {
    console.log()
    res.redirect('/home')
}
}