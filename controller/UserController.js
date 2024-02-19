const User = require('../models/UserSchema')

module.exports = {
      get: (req, res) => {
            res.send('hello world')
      },
      insert: async (req, res) => {
            try {
                  const userData = req.body;

                  const newUser = new User(userData);

                  const savedUser = await newUser.save()
                  res.status(201).json({ message: 'User inserted successfully', data: savedUser });
            } catch (err) {
                  console.error(err);
                  res.status(500).json({ message: 'Internal Server Error' });
            }
      }
}