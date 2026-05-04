const Course = require('../models/course');

//Create course
const createCourse = async(req, res) =>{
    const {
        courseCode,
        courseDescription,
    } = req.body;

    try{
        const course = await Course.create({
            courseCode, courseDescription
        });
        res.status(200).json(course);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

//View all course
const getAllCourses = async(req, res) =>{
    const courses = await Course.find({});
    res.status(200).json(courses);
}

//View course using course id
const getCourseUsingCourseId = async(req, res) =>{
    const {courseId} = req.params

    try{
        const course = await Course.findById({_id: courseId});
        res.status(200).json(course);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

module.exports = {
    createCourse,
    getAllCourses,
    getCourseUsingCourseId
}