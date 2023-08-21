const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3000;
const { userExists } = require('./queries/user');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/serwer', { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Hello from the serwer');
});

app.put('/emails', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await userExists(email);
    console.log(user);
    if (user) {
      res.send({ exists: true, message: 'Email exists' });
    }
  } catch (error) {
    console.error('Error checking user existence:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
