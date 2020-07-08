const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
    ImageURL: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true,
    },
    Content: {
        type: String,
        required: true,
    },
    Heading: {
        type: String,
        required: true,
    }
})

const Schema = mongoose.model('test_collection', appSchema)
module.exports = Schema