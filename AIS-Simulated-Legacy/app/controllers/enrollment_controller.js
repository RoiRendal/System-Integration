const Enrollment = require('../models/enrollment');

//Create Enrollment
const createEnrollment = async(req, res) =>{
    const {
        studentId, 
        semester, 
        courseCode,  
        paymentStatus, 
        enrollmentStatus
    } = req.body;

    try{
        const enrollment = await Enrollment.create({
            studentId, semester, courseCode, paymentStatus, enrollmentStatus
        });
        res.status(200).json(enrollment);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

//View all enrollments
const getAllEnrollments = async(req, res) =>{
    const enrollments = await Enrollment.find({});
    res.status(200).json(enrollments);
}

//View enrollment using student id
const getEnrollmentUsingStudentId = async(req, res) =>{
    const {studentId} = req.params

    try{
        const enrollments = await Enrollment.find({studentId});
        res.status(200).json(enrollments);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

module.exports = {
    createEnrollment,
    getAllEnrollments,
    getEnrollmentUsingStudentId
}