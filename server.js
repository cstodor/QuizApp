// MAIN SERVER ENTRY POINT FILE v0.5
// Author: MeanTemplates.com
// License: ISC

/// Dev Dependensies 
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const publicUrl = 'public/index.html';


// Client Routes
const routeQuiz = require('./routes/quiz-routes')

// Config Files
const dbConfig = require('./config/db')

// Server & Port Init
const app = express()
const port = 5000

// Database Connection Mongoose
mongoose.connect(dbConfig.database)
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + dbConfig.database)
})
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err)
})

// Database Connecition to MongoDB Atlas (https://docs.atlas.mongodb.com/driver-connection/?_ga=1.79785943.1385989390.1483376091#node-js-driver-example)
// var MongoClient = require('mongodb').MongoClient;

// var uri = "MONGO DB CONFIG";
// MongoClient.connect(uri, function(err, db) {
//   db.close();
// });

// Set public folder
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, function () {
  console.log('Server started on port: ' + port)
})

// API Routes
app.use('/api/quiz', routeQuiz)

// Server Routes
app.get('/', (req, res) => {
    res.send('Error: Cannot reach for public files!')
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, publicUrl));
})
