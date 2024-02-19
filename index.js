const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const mongoURI = "mongodb+srv://gdc:ITxNFs3MOffsxIHO@belajaraja.3genrsz.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// koneksi db
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
      console.log('Connected to MongoDB');
});

// app.get('/', (req, res) => {
//       res.send('Hello, world!');
// });


const useRouter = require("./routes/Routes")
app.use('/', useRouter)


app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
});
