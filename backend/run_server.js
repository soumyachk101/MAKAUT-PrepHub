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
    // Semester 1 & 2 (Common)
    { subjectCode: 'BS-PH101', name: 'Physics-I', branch: ['CSE', 'IT', 'ECE', 'EE', 'ME', 'CE'], semester: 1, syllabusDetails: 'Mechanics, Optics, Electromagnetism, Quantum Mechanics' },
    { subjectCode: 'BS-M101', name: 'Mathematics-IA', branch: ['CSE', 'IT', 'ECE', 'EE', 'ME', 'CE'], semester: 1, syllabusDetails: 'Calculus, Matrices, Vector Spaces' },
    { subjectCode: 'ES-EE101', name: 'Basic Electrical Engineering', branch: ['CSE', 'IT', 'ECE', 'EE', 'ME', 'CE'], semester: 1, syllabusDetails: 'DC circuits, AC circuits, Transformers, Electrical Machines' },
    { subjectCode: 'BS-CH201', name: 'Chemistry-I', branch: ['CSE', 'IT', 'ECE', 'EE', 'ME', 'CE'], semester: 2, syllabusDetails: 'Thermodynamics, Spectroscopic techniques, Polymer Chemistry' },
    { subjectCode: 'BS-M201', name: 'Mathematics-IIA', branch: ['CSE', 'IT', 'ECE', 'EE', 'ME', 'CE'], semester: 2, syllabusDetails: 'Differential Equations, Laplace Transform' },
    { subjectCode: 'ES-CS201', name: 'Programming for Problem Solving', branch: ['CSE', 'IT', 'ECE', 'EE', 'ME', 'CE'], semester: 2, syllabusDetails: 'C Programming, Arrays, Pointers, Functions' },

    // Semester 3
    { subjectCode: 'PCC-CS301', name: 'Data Structure & Algorithms', branch: ['CSE', 'IT'], semester: 3, syllabusDetails: 'Arrays, Linked Lists, Trees, Graphs, Sorting, Searching' },
    { subjectCode: 'PCC-CS302', name: 'Computer Organization', branch: ['CSE', 'IT'], semester: 3, syllabusDetails: 'Number Systems, ALU design, Memory Organization' },
    { subjectCode: 'ESC-301', name: 'Analog and Digital Electronics', branch: ['CSE', 'IT'], semester: 3, syllabusDetails: 'Op-Amps, Logic Gates, Combinational/Sequential Circuits' },
    { subjectCode: 'PCC-CS303', name: 'Operating Systems', branch: ['CSE'], semester: 3, syllabusDetails: 'Process Management, Memory Management, File Systems' },
    { subjectCode: 'PC-EC301', name: 'Electronic Devices', branch: ['ECE'], semester: 3, syllabusDetails: 'Semiconductors, Diodes, BJTs, MOSFETs' },
    { subjectCode: 'PC-EE301', name: 'Electric Circuit Theory', branch: ['EE'], semester: 3, syllabusDetails: 'Network Theorems, Transient Analysis, Graph Theory' },

    // Semester 4
    { subjectCode: 'PCC-CS401', name: 'Discrete Mathematics', branch: ['CSE', 'IT'], semester: 4, syllabusDetails: 'Set Theory, Graph Theory, Combinatorics' },
    { subjectCode: 'PCC-CS402', name: 'Computer Architecture', branch: ['CSE'], semester: 4, syllabusDetails: 'Pipeline, Superscalar processors, Cache memory' },
    { subjectCode: 'PCC-CS403', name: 'Formal Language & Automata Theory', branch: ['CSE', 'IT'], semester: 4, syllabusDetails: 'Finite Automata, Context Free Grammars, Turing Machines' },
    { subjectCode: 'PCC-CS404', name: 'Design & Analysis of Algorithms', branch: ['CSE', 'IT'], semester: 4, syllabusDetails: 'Divide & Conquer, Dynamic Programming, Greedy Methods' },
    { subjectCode: 'PC-EC401', name: 'Analog Communication', branch: ['ECE'], semester: 4, syllabusDetails: 'AM, FM, PM, Noise analysis' },
    { subjectCode: 'PC-EE401', name: 'Electrical Machines-I', branch: ['EE'], semester: 4, syllabusDetails: 'DC Machines, Transformers' },

    // Semester 5
    { subjectCode: 'PCC-CS501', name: 'Database Management Systems', branch: ['CSE', 'IT'], semester: 5, syllabusDetails: 'Relational Model, SQL, Normalization, Transaction' },
    { subjectCode: 'PCC-CS502', name: 'Object Oriented Programming', branch: ['CSE', 'IT'], semester: 5, syllabusDetails: 'Classes, Objects, Inheritance, Polymorphism (Java/C++)' },
    { subjectCode: 'PCC-CS503', name: 'Computer Networks', branch: ['CSE', 'IT'], semester: 5, syllabusDetails: 'OSI Model, TCP/IP, Routing, Switching' },

    // Semester 6
    { subjectCode: 'PCC-CS601', name: 'Software Engineering', branch: ['CSE', 'IT'], semester: 6, syllabusDetails: 'SDLC, Agile, Testing, UML' },
    { subjectCode: 'PCC-CS602', name: 'Compiler Design', branch: ['CSE'], semester: 6, syllabusDetails: 'Lexical Analysis, Parsing, Code Generation' },
    { subjectCode: 'PEC-IT601', name: 'Web Technology', branch: ['IT'], semester: 6, syllabusDetails: 'HTML, CSS, JavaScript, React/Angular, Node.js' },

    // Semester 7
    { subjectCode: 'PEC-CS701', name: 'Artificial Intelligence', branch: ['CSE', 'IT'], semester: 7, syllabusDetails: 'Search Algorithms, Knowledge Representation, Machine Learning' },
    { subjectCode: 'PEC-CS702', name: 'Cloud Computing', branch: ['CSE', 'IT'], semester: 7, syllabusDetails: 'IaaS, PaaS, SaaS, Virtualization, AWS/Azure' },

    // Semester 8
    { subjectCode: 'PROJ-CS801', name: 'Project Work II', branch: ['CSE', 'IT', 'ECE', 'EE', 'ME', 'CE'], semester: 8, syllabusDetails: 'Final year project implementation and presentation' },
  ];

  const createdSubjects = await Subject.insertMany(subjects);
  console.log(`Seeded ${createdSubjects.length} subjects`);

  const materials = [];

  // Add some dummy materials for each subject
  createdSubjects.forEach(subject => {
    materials.push({ title: `${subject.name} - Module 1 Notes`, type: 'Notes', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', subjectId: subject._id });
    materials.push({ title: `${subject.subjectCode} PYQ 2022`, type: 'PYQ', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', subjectId: subject._id });
    materials.push({ title: `${subject.name} Syllabus Details`, type: 'Syllabus', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', subjectId: subject._id });
    // Add organizer for some subjects
    if (Math.random() > 0.5) {
      materials.push({ title: `${subject.subjectCode} Complete Organizer`, type: 'Organizer', fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', subjectId: subject._id });
    }
  });

  const createdMaterials = await Material.insertMany(materials);
  console.log(`Seeded ${createdMaterials.length} materials`);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start();
