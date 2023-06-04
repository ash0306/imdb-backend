const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    genre:{
        type: String,
        required:true
    },
    language:{
        type: String,
        default: 'English' 
    },
    year:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('movieModel', movieSchema);