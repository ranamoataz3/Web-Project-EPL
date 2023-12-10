const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;


const officialSchema = new Schema({

    // type is only "Lineman" or "Referee"
    type:
    {
        type: String,
        required: true
    },

    name: 
    {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    matches:
    [{
        type: Schema.Types.ObjectId,
        ref: 'Match'
    }]

});

officialSchema.plugin(uniqueValidator);

module.exports = Official= mongoose.model('Official', officialSchema);
