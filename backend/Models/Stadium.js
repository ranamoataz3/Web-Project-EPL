const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;



const stadiumSchema = new Schema({

    name:
    {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },

    width:
    {
        type: Number,
        required: true
    },

    height:
    {
        type: Number,
        required: true
    },

    matches:
    [{
        type: Schema.Types.ObjectId,
        ref: 'Match'
    }]

});

stadiumSchema.plugin(uniqueValidator);
module.exports = Stadium = mongoose.model('Stadium', stadiumSchema);