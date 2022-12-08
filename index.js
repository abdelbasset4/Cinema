const express = require('express');
const path = require('path');

// Route
const actorRoute = require('./routes/actorRoute') 
const salleRoute = require('./routes/salleRoute') 
const filmRoute = require('./routes/filmRoute') 
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'images')))
app.use(express.json());
// app.use(cookieParser())
app.set('view engine', 'ejs');
app.set('views', 'views')

app.use('/actor',actorRoute)
app.use('/salle',salleRoute)
app.use('/film',filmRoute)
app.listen(3000, () => console.log("listen"))