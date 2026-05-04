const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = Schema({
    courseCode: {
        type: String,
        require: true
    },
    courseDescription: {
        type: String,
        require: true
    }
}, {timestamps: true})


module.exports = mongoose.model('Course', CourseSchema);