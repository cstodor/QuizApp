// Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Quiz Schema
const QuestionSchema = new Schema({
    id: Number,
    question: String,
    options: Array,
    answer: Array
})

module.exports = mongoose.model('Question', QuestionSchema)
