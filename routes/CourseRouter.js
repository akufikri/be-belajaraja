const express = require('express')
const router = express.Router()

const CourseController = require('../controller/CourseController')

router.get('/course', CourseController.get)

module.exports = router;