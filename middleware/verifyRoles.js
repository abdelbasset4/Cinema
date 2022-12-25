const verifyRoleHandler = (req, res , next) => {
    let {username , role} = req.cookies;
    console.log('the role is :',role)
    if(role === "admin"){
        next()
    }else{
        console.log("username verify roles : ",username)
        console.log("role verify roles : ",role)
        res.render('404.ejs',{username , role})
    }
}

module.exports = verifyRoleHandler;