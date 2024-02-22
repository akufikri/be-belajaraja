const User = require('../models/UserSchema')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
      return jwt.sign({ _id }, 'belajarajadulu', { expiresIn: '3d' })
}

const loginUser = async (req, res) => {
      const { email, password } = req.body;

      try {
            const user = await User.login(email, password);
            // create token
            const token = createToken(user._id)
            res.status(200).json({ email, token });
      } catch (error) {
            res.status(400).json({ error: error.message });
      }
}

const registerUser = async (req, res) => {
      const { username, email, password } = req.body;

      try {
            const user = await User.register(username, email, password);
            // create token
            const token = createToken(user._id)
            res.status(200).json({ username, email, password, user, token });
      } catch (error) {
            res.status(400).json({ error: error.message });
      }
}

module.exports = { loginUser, registerUser }