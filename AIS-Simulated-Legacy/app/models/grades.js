const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GradeSchema = Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        require: true
    },
    courseCode: {
        type: String,
        require: true
    },
    grade: {
        type: mongoose.Types.Decimal128,
        require: true,
    },
}, {timestamps: true})


module.exports = mongoose.model('Grade', GradeSchema);