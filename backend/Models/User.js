const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20
    },

    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },

    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 200
    },

    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 8,
        maxlength: 30
    },

    birthDate: {
        type: Date,
        required: true
    },

    gender:{
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },

    address: {
        type: String,
        required: false,
        minlength: 3,
        maxlength: 100
    },

    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    },

    matches: [{
        type: Schema.Types.ObjectId,
        ref: 'Match'
    }]
});

userSchema.plugin(uniqueValidator);

module.exports = User = mongoose.model('User', userSchema);