require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const subjectRoutes = require('./routes/subjects');
const materialRoutes = require('./routes/materials');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/prephub';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/subjects', subjectRoutes);
app.use('/api/materials', materialRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
