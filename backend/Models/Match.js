const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;


const matchSchema = new Schema({

    homeTeam:
    {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },

    awayTeam:
    {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },

    stadium:
    {
        type: Schema.Types.ObjectId,
        ref: 'Stadium'
    },

    dateTime:
    {
        type: Date,
        required: true
    },

    referee:
    {
        type: Schema.Types.ObjectId,
        ref: 'Official',
        required: true
    },

    // 2 linesmen
    linesmen:
    [{
        type: Schema.Types.ObjectId,
        ref: 'Official',
        size: 2,
        required: true
    }],

    // a matrix of booleans
    // will specify the size of the stadium
    // number of rows is the height of the stadium
    // number of columns is the width of the stadium

    seats: {
        type: [[Boolean]],
        required: true,
        default: function () {
          // Calculate the size of the seats matrix based on stadium dimensions
        const stadium = this.stadium;
        if (stadium && stadium.width && stadium.height) {
            const width = stadium.width;
            const height = stadium.height;
            // Initialize the seats matrix with unoccupied seats (false)
            return Array.from({ length: height }, () => Array(width).fill(false));
        }
        else 
        {
            return [[]]; // Default empty seats matrix if stadium dimensions are missing
        }
        }
    }    
});

matchSchema.plugin(uniqueValidator);
module.exports = Match = mongoose.model('Match', matchSchema);