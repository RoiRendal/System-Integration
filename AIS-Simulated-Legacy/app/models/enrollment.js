const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EnrollmentSchema = Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        require: true
    },
    semester: {
        type: String,
        require: true
    },
    courseCode: {
        type: String,
        require: true
    },
    paymentStatus: {
        type: String,
        require: true,
    },
    enrollmentStatus: {
        type: String,
        require: true
    }
}, {timestamps: true})


module.exports = mongoose.model('Enrollment', EnrollmentSchema);