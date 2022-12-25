const verifyAuthHandler = (req , res , next) => {
    let {username , role} = req.cookies;
    if(!username) username = null;
    res.locals.username = username;
    res.locals.role = role;
    next();
}

module.exports = verifyAuthHandler;