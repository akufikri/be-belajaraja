const Course = require('../models/CoursesSchema')

const createCourse = async (req, res) => {
      const { title, description, content, price, mentor } = req.body

      try {
            const newCourse = new Course({
                  title,
                  description,
                  content,
                  price,
                  mentor
            });
            const savedCourse = await newCourse.save()
            res.status(201).json(savedCourse)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
}
const getCourse = async (req, res) => {
      try {
            const courses = await Course.find({}); // Find all courses (empty filter)

            if (courses.length === 0) { // Check if any courses were found
                  return res.status(404).json({ error: 'No courses found' });
            }

            res.status(200).json(courses);
      } catch (error) {
            res.status(500).json({ error: error.message });
      }
};

const getCourseById = async (req, res) => {
      try {
            const courseId = req.params.id;

            const course = await Course.findById(courseId);
            if (!course) {
                  return res.status(404).json({ error: 'Course not found' });
            }

            res.status(200).json(course);
      } catch (error) {
            res.status(500).json({ error: error.message });
      }
}
module.exports = { createCourse, getCourse, getCourseById }