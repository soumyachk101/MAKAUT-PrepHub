require('dotenv').config();
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const subjectRoutes = require('./routes/subjects');
const materialRoutes = require('./routes/materials');

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

  // Seed the DB
  const subjects = [
    { subjectCode: 'CS401', name: 'Computer Architecture', branch: ['CSE'], semester: 4, syllabusDetails: 'Basic organization, CPU, memory' },
    { subjectCode: 'CS402', name: 'Design and Analysis of Algorithms', branch: ['CSE', 'IT'], semester: 4, syllabusDetails: 'Sorting, DP, Graphs' },
    { subjectCode: 'EE101', name: 'Basic Electrical Engineering', branch: ['CSE', 'ECE', 'EE'], semester: 1, syllabusDetails: 'DC circuits, AC circuits' },
  ];
  const createdSubjects = await Subject.insertMany(subjects);
  console.log(`Seeded ${createdSubjects.length} subjects`);

  const materials = [
    { title: 'Module 1 Notes: CPU Design', type: 'Notes', fileUrl: 'https://example.com/notes1.pdf', subjectId: createdSubjects[0]._id },
    { title: '2022 PYQ', type: 'PYQ', fileUrl: 'https://example.com/pyq2022.pdf', subjectId: createdSubjects[0]._id },
    { title: 'Algorithms Complete Organizer', type: 'Organizer', fileUrl: 'https://example.com/algo_org.pdf', subjectId: createdSubjects[1]._id },
    { title: 'Module 1 & 2 Notes', type: 'Notes', fileUrl: 'https://example.com/algo_notes.pdf', subjectId: createdSubjects[1]._id },
    { title: 'BEE Semester 1 Syllabus', type: 'Syllabus', fileUrl: 'https://example.com/bee_syllabus.pdf', subjectId: createdSubjects[2]._id }
  ];
  const createdMaterials = await Material.insertMany(materials);
  console.log(`Seeded ${createdMaterials.length} materials`);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start();
