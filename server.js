// Load Express
const express = require('express')
const path = require('path')

// require the to do database
const gameDb = require('./data/game-db')

//Create our express app
const app = express()

//Configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//Mount middleware (app.use)

//Mount routes

//Define a 'root' route directly on app 
//Next Lesson we'll use better practice routing
app.get('/', function(req, res) {
    //Path MUST start with a leading slash
    res.redirect('/games')
})

app.get('/home', function(req, res) {
    // Never begin the name of the template with a forward /
    res.render('home')
})

app.get('/games', function(req, res) {
    const games = gameDb.getAll()
    res.render('games/index', { games })
}) 


//Tell the app to listen on port 4000 for HTTP requests from clients
app.listen(4000, function() {
    console.log('Listening on port 4000')
})

