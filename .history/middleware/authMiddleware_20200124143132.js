const auth = (req, res, next) => {
if (req.sessinon && req.session.isLoggedIn===true) {
    console.log('User is logged in')
    next();
}else {
    console.log('User is not logged in - Acess denied');
    res.status(401).send();
}
}