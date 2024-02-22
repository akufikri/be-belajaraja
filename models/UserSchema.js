const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new Schema({
      username: {
            type: String,
            required: true
      },
      email: {
            type: String,
            required: true,
            unique: true
      },
      password: {
            type: String,
            required: true
      }
})
// registrations
userSchema.static('register', async function (username, email, password) {

      // validation
      if (!email || !password) {
            throw Error("All fields must be filled")
      }
      if (!validator.isEmail(email)) {
            throw Error("Email is not valid")
      }
      if (!validator.isStrongPassword(password)) {
            throw Error("Password not strong enpough")
      }

      const exists = await this.findOne({ email })
      if (exists) {
            throw Error('Email is already exists')
      }
      // hashed password
      const salt = await bcrypt.genSalt(10)
      const hashed = await bcrypt.hash(password, salt)

      const user = await this.create({ username, email, password: hashed })
      return user
})

// logins
userSchema.static('login', async function (email, password) {
      // validation
      if (!email || !password) {
            throw Error("All fields must be filled")
      }
      const user = await this.findOne({ email })
      if (!user) {
            throw Error("Incorrect email")
      }

      const match = await bcrypt.compare(password, user.password)

      if (!match) {
            throw Error("Incorrect password")
      }

      return user

})

module.exports = mongoose.model('User', userSchema)