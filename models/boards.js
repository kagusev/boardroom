// creating schema
const mongoose = require('mongoose')
const boardsSchema = new mongoose.Schema({

    boardType: {
        type: String,
        required: true
    },

    boardBrand: {
        type: String,
        required: true
    },

    boardModel: {
        type: String,
        required: true
    },

    purchaseDate: {
        type: Date,
        default: Date.now
    },

    estimatedValue: {
        type: Number
    }

})

//creating a model, exporting schema anf setting collection to connect
module.exports = mongoose.model('boards', boardsSchema, 'basicInfo')