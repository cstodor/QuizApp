const mongoose = require('mongoose')
// const dbConfig = require('../config/db')

// Quiz Schema
const QuestionSchema = mongoose.Schema({
    id: Number,
    question: String,
    options: Array,
    answer: Array
})

const Question = module.exports = mongoose.model('Question', QuestionSchema)

// Get Question By ID
module.exports.getQuestionById = function (id, callback) {
    Question.findById(id, callback)
    console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEY")
    // res.send("QUestion")
}
