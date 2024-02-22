const express = require('express')
const router = express.Router()

const CourseController = require('../controller/CourseController')

router.post('/create', CourseController.createCourse)
router.get('/get', CourseController.getCourse)
router.get('/get/:id', CourseController.getCourseById)

module.exports = router;