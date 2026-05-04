const Grade = require('../models/grades');

//Create grade
const createGrade = async(req, res) =>{
    const {
        studentId,
        courseCode,
        grade
    } = req.body;

    try{
        const course = await Grade.create({
            studentId, courseCode, grade
        });
        res.status(200).json(course);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

//View all grade
const getAllGrades = async(req, res) =>{
    const grades = await Grade.find({});
    res.status(200).json(grades);
}

//View grade using student id
const getGradesUsingStudentId = async(req, res) =>{
    const {studentId} = req.params

    try{
        const grades = await Grade.find({studentId});
        res.status(200).json(grades);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

module.exports = {
    createGrade,
    getAllGrades,
    getGradesUsingStudentId
}