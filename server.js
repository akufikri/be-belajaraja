const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// ================= CONFIG PACKAGES ========================//

// CONNECTIONS
mongoose.connect('mongodb://localhost:27017/belajaraja')
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('Could not connect to MongoDB:', err));
// CONNECTIONS


// ================= CONFIG ROUTER ========================//
const UserRouter = require('./routes/UserRouter')
const CourseRouter = require('./routes/CourseRouter')

app.use('/api/user', UserRouter)
app.use('/api/course', CourseRouter)

app.listen(3000, () => {
      console.log("successfully connected")
})

