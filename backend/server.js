const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const userRoutes = require('./controller/userRoutes');

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));


app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// const mongoUrl = 'mongodb+srv://haideralicodes:bcAZeKCMqmfOIodf@cluster0.l8h9q.mongodb.net/'

mongoose.connect('mongodb://127.0.0.1:27017/userDB', {
}).then(() => {
  console.log('DB connected...');
}).catch((err) => {
  console.error('DB connection error: ', err);
});


app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', userRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});