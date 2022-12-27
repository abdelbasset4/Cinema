const logout = (req , res) => {
    res.clearCookie("username",{httpOnly:true});
    res.clearCookie("role",{httpOnly:true});
    res.clearCookie("userId",{httpOnly:true});
    return res.redirect('/');
}

module.exports = {logout};