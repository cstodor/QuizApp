// Dependencies
const express = require('express')
const routerResults = express.Router()

// Model
const Result = require('../models/results')

// Result API Routes (api/scores/)
routerResults.post('/save', (req, res, next) => {

    // Create Result Object for Registration
    let newResult = new Result({
        name: req.body.name,
        score: req.body.score,
        date: new Date()
    })

    // Register Result Object
    Result.registerResult(newResult, (err, result) => {
        if (err) {
            res.json({ success: false, msg: 'Score Registration Failed! ' + err })
        } else {
            res.json({ success: true, msg: 'Score Registered!' })
        }
    })

})

routerResults.get('/high-scores', (req, res, next) => {

    // Get All Scores
    Result.find({}, function (err, items) {
        if (err) {
            console.log(err)
            res.json({ err: err })
        } else {
            res.json({ results: items })
        }
    })

})

// Export this Module
module.exports = routerResults
