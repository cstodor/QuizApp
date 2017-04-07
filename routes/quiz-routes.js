// Dependencies
const express = require('express')
const routerQuiz = express.Router()

// Model
const questionsModel = require('../models/question')

// Quiz API Routes (api/quiz/)
routerQuiz.get('/', (req, res, next) => {

    // Get All Questions
    questionsModel.find({}, function (err, items) {
        if (err) {
            console.log(err)
            res.json({ err: err })
        } else {
            res.json({ questions: items })
        }
    })

})

// Export this Module
module.exports = routerQuiz
