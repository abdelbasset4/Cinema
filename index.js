const express = require('express');
const path = require('path');
const cookieParser = require("cookie-parser");
// Route
const actorRoute = require('./routes/actorRoute') 
const showRoute = require('./routes/showRoute') 
const roleRoute = require('./routes/roleRoute') 
const salleRoute = require('./routes/salleRoute') 
const filmRoute = require('./routes/filmRoute')
const homeRoute = require('./routes/homeRoute') 
const signinRoute = require('./routes/signinRoute')
const signupRoute = require('./routes/signupRoute')
const logoutRoute = require('./routes/logoutRoute');
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use("/images",express.static(path.join(__dirname, 'images')))
app.use("/icons",express.static(path.join(__dirname, 'node_modules','bootstrap-icons','font')))
app.use(express.json());
app.use(cookieParser())
app.set('view engine', 'ejs');
app.set('views', 'views')
app.use('/',homeRoute)
app.use('/signin',signinRoute)
app.use('/signup',signupRoute)
app.use('/logout',logoutRoute)
app.use('/actor',actorRoute)
app.use('/show',showRoute)
app.use('/role',roleRoute)
app.use('/salle',salleRoute)
app.use('/film',filmRoute)

app.listen(3000, () => console.log("listen"))