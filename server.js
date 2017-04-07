// MAIN SERVER ENTRY POINT FILE v0.5
// Author: MeanTemplates.com
// License: MIT

// Dependensies 
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser') // grabs information from the POST data form.
const cors = require('cors')
const mongoose = require('mongoose')
const publicUrl = 'public/index.html'

// Route Files
const routeQuiz = require('./routes/quiz-routes')
const routeResults = require('./routes/results-routes')

// Config Files
const dbConfig = require('./config/db')

// Server & Port Initialization
const app = express()
const port = process.env.PORT || 5000

// Database Connection Mongoose
mongoose.connect(dbConfig.database)
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + dbConfig.database)
})

mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err)
})

// CORS Middleware
app.use(cors())

// Body Parser Middleware
app.use(bodyParser.json())

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')))

// Listen to Port
app.listen(port, function () {
    console.log('Server started on port: ' + port)
})

// API Routes
app.use('/api/quiz', routeQuiz)
app.use('/api/scores', routeResults)

// Server Routes
app.get('/', (req, res) => {
    res.send('Error: Cannot reach for public files!')
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, publicUrl))
})
