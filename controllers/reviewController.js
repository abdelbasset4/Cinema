const User = require("../models/User");
const Film = require("../models/Film");
const Review = require("../models/Review");

const leaveReview = async(req , res) => {
    const {stars} = req.body;
    const {userId} = req.cookies;
    const {filmTitle} = req.params;
    console.log("leave review filmTitle ",filmTitle)
    try{
        await Review.createReview(userId , filmTitle.replaceAll('-',' ') , stars);
        return res.json({"message":"the review has been created"});
    }catch(err){
        console.log(err)
    }
    
}

const showReview = async(req , res , next) => {
    const {userId} = req.cookies;
    const {filmTitle} = req.params;
    res.locals.stars = 0;
    console.log("userid :  ",userId)
    if(userId){
        console.log("userid :  ",userId)
        try{

            const result = await Review.getReview(userId , filmTitle.replaceAll('-',' '));
            const [{stars}] = result;
            console.log("result stars : ",stars)
            res.locals.stars = stars;
        
        }catch(e){
            console.log(e)
        }
        
    }
    next();
}

module.exports = {leaveReview , showReview}