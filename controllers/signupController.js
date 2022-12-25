const User = require("../models/User");

const getSignupPage = (req , res) => {
    return res.render('signup',{duplicate:null})
}

const signUpUser = async (req , res) => {
    const {username , password} = req.body;
    console.log("username ",username);
    console.log("password ",password);
    const [existingUser] = await User.getSpecificUser(username);
    console.log("existing ",existingUser)
    if(existingUser){
        return res.render('signup',{duplicate : 'the username already exist'});
    }else{
        await User.createUser(username , password);
        res.cookie('username',username,{httpOnly:true , maxAge : 1000 * 3600 * 24 * 10 , SameSite:'Strict'})
        return res.redirect('/')
        //return res.render('home',{username:username})
    }
}
module.exports = {getSignupPage , signUpUser}