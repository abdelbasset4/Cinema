const Salle = require("../models/Salle");
const getIndexPage = async (req , res) => {
    let {username , role} = req.cookies;
    console.log("username cookie ",username)
    if(!username) username = null;
    const salles = await Salle.getSalles();
    return res.render('home',{username , salles , role});
}

module.exports = {getIndexPage}