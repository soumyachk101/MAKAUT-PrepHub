require('dotenv').config();
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const subjectRoutes = require('./routes/subjects');
const materialRoutes = require('./routes/materials');
const { subjects, buildMaterials } = require('./data/subjects');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/subjects', subjectRoutes);
app.use('/api/materials', materialRoutes);

const Subject = require('./models/Subject');
const Material = require('./models/Material');

async function start() {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  await mongoose.connect(uri);
  console.log('MongoDB Memory Server connected at', uri);

  const createdSubjects = await Subject.insertMany(subjects);
  console.log(`Seeded ${createdSubjects.length} subjects`);

  const materials = buildMaterials(createdSubjects);
  const createdMaterials = await Material.insertMany(materials);
  console.log(`Seeded ${createdMaterials.length} materials`);
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start();
