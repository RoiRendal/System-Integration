const express = require('express');
const router = express.Router();

const {createCourse, getAllCourses, getCourseUsingCourseId} = require('../controllers/course_controller');

router.post('/', createCourse);
router.get('/', getAllCourses);
router.get('/:courseId', getCourseUsingCourseId)

module.exports = router;