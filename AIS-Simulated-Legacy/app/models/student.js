const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = Schema({
    name: {
        type: String,
        require: true
    },
    birthdate: {
        type: Date,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    program: {
        type: String,
        require: true,
    },
    studentStatus: {
        type: String,
        require: true
    }
}, {timestamps: true})


module.exports = mongoose.model('Student', StudentSchema);