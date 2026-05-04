const Student = require('../models/student');

//Create student
const createStudent = async(req, res) =>{
    const {
        name, 
        birthdate, 
        address,  
        program, 
        studentStatus
    } = req.body;

    try{
        const student = await Student.create({
            name, birthdate, address, program, studentStatus
        });
        res.status(200).json(student);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

//View all students
const getAllStudents = async(req, res) =>{
    const students = await Student.find({});
    res.status(200).json(students);
}

//View student using student id
const getStudentUsingStudentId = async(req, res) =>{
    const {studentId} = req.params

    try{
        const student = await Student.findById({_id: studentId});
        res.status(200).json(student);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

module.exports = {
    createStudent,
    getAllStudents,
    getStudentUsingStudentId
}