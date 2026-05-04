const express = require('express');
const router = express.Router();

const {createEnrollment, getAllEnrollments, getEnrollmentUsingStudentId} = require('../controllers/enrollment_controller');

router.post('/', createEnrollment);
router.get('/', getAllEnrollments);
router.get('/:studentId', getEnrollmentUsingStudentId)

module.exports = router;