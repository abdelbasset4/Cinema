const User = require("../models/User");

const getSigninPage = (req , res) => {
    return res.render('signin',{error : null})
}

const signinUser = async (req , res) => {
    const {username , password} = req.body;
    console.log("sign in username ",username);
    const [user] = await User.getSpecificUser(username);
    if(user && user?.password === password){
        res.cookie('username',username,{httpOnly:true , maxAge : 1000 * 3600 * 24 * 10 , SameSite:'Strict'});
        res.cookie('role',user.role,{httpOnly:true , maxAge : 1000 * 3600 * 24 * 10 , SameSite:'Strict'});
        res.cookie('userId',user.id,{httpOnly:true , maxAge : 1000 * 3600 * 24 * 10 , SameSite:'Strict'});
        return res.redirect('/')
    }else{
        res.render('signin',{error:'username or password is wrong'})
    }
}

module.exports = {getSigninPage , signinUser}