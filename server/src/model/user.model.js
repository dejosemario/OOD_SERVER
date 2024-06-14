const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    id:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    booksBorrowed: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;