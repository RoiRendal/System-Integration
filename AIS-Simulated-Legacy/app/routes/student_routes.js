const express = require('express');
const router = express.Router();

const {createStudent, getAllStudents, getStudentUsingStudentId} = require('../controllers/student_controller');

router.post('/', createStudent);
router.get('/', getAllStudents);
router.get('/:studentId', getStudentUsingStudentId)

module.exports = router;