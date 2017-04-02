// Quiz Routes

// Dependencies
const express = require('express') // Express
const routerQuiz = express.Router() // Express Routrer
// const mongoose = require('mongoose') // Mongoose - for post requests???

// Models
//const questionsModel = require('../models/question') // Questions Model

// Configs
//const dbConfig = require('../config/db') // Database Config

// Routes
routerQuiz.get('/', (req, res, next) => {
    res.json({ questions: req.questions })
})

// Export this Module
module.exports = routerQuiz
