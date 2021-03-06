let mongoose = require('mongoose');

const User = mongoose.model('Users', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
        trim: true,
    }
});

module.exports = {User};
