const express = require('express');
const router = express.Router();

const {createGrade, getAllGrades, getGradesUsingStudentId} = require('../controllers/grade_controller');

router.post('/', createGrade);
router.get('/', getAllGrades);
router.get('/:studentId', getGradesUsingStudentId)

module.exports = router;