const express = require('express')
const router = express.Router()

const UserController = require('../controller/UserController')
const CourseController = require("../controller/CourseController")

router.get("/", CourseController.get)
router.post("/create-user", UserController.insert)

module.exports = router