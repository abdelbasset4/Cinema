const verifyAuthOnGet = (req , res , next) => {
    const {username , role , userId} = req.cookies;
    res.locals.username = username ?? null;
    res.locals.role = role;
    res.locals.userId = userId;
    next();
}

const verifyAuthOnPost = (req , res , next) => {
    const {username , role , userId} = req.cookies;
    if(username && role && userId) next()
    else return res.json({"message":"err"});
}

module.exports = {verifyAuthOnGet , verifyAuthOnPost};