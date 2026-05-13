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
  {
    "subjectCode": "CSE101",
    "name": "Mathematics-IA/IB",
    "branch": [
      "CSE",
      "IT",
      "ECE",
      "EE",
      "ME",
      "CE"
    ],
    "semester": 1,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE102",
    "name": "Physics-I OR Chemistry-I",
    "branch": [
      "CSE",
      "IT",
      "ECE",
      "EE",
      "ME",
      "CE"
    ],
    "semester": 1,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE103",
    "name": "Basic Electrical Engineering OR Programming for Problem Solving",
    "branch": [
      "CSE",
      "IT",
      "ECE",
      "EE",
      "ME",
      "CE"
    ],
    "semester": 1,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE194",
    "name": "Physics/Chemistry Lab",
    "branch": [
      "CSE",
      "IT",
      "ECE",
      "EE",
      "ME",
      "CE"
    ],
    "semester": 1,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE195",
    "name": "Basic Electrical/Programming Lab",
    "branch": [
      "CSE",
      "IT",
      "ECE",
      "EE",
      "ME",
      "CE"
    ],
    "semester": 1,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE196",
    "name": "Engineering Graphics & Design OR English Language Lab",
    "branch": [
      "CSE",
      "IT",
      "ECE",
      "EE",
      "ME",
      "CE"
    ],
    "semester": 1,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE207",
    "name": "Mathematics-IIA/IIB",
    "branch": [
      "CSE",
      "IT",
      "ECE",
      "EE",
      "ME",
      "CE"
    ],
    "semester": 2,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE208",
    "name": "Chemistry-I OR Physics-I",
    "branch": [
      "CSE",
      "IT",
      "ECE",
      "EE",
      "ME",
      "CE"
    ],
    "semester": 2,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE209",
    "name": "Programming for Problem Solving OR Basic Electrical Engineering",
    "branch": [
      "CSE",
      "IT",
      "ECE",
      "EE",
      "ME",
      "CE"
    ],
    "semester": 2,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE2910",
    "name": "Chemistry/Physics Lab",
    "branch": [
      "CSE",
      "IT",
      "ECE",
      "EE",
      "ME",
      "CE"
    ],
    "semester": 2,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE2911",
    "name": "Programming/Basic Electrical Lab",
    "branch": [
      "CSE",
      "IT",
      "ECE",
      "EE",
      "ME",
      "CE"
    ],
    "semester": 2,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE2912",
    "name": "English Language Lab OR Engineering Graphics & Design",
    "branch": [
      "CSE",
      "IT",
      "ECE",
      "EE",
      "ME",
      "CE"
    ],
    "semester": 2,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE3013",
    "name": "Analog & Digital Electronics",
    "branch": [
      "CSE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE3014",
    "name": "Data Structure & Algorithms",
    "branch": [
      "CSE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE3015",
    "name": "Computer Organization",
    "branch": [
      "CSE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE3016",
    "name": "Mathematics-III",
    "branch": [
      "CSE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE3017",
    "name": "Economics",
    "branch": [
      "CSE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE3918",
    "name": "Analog & Digital Lab",
    "branch": [
      "CSE"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE3919",
    "name": "Data Structure Lab",
    "branch": [
      "CSE"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE3920",
    "name": "IT Workshop (SciLab/C++)",
    "branch": [
      "CSE"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE4021",
    "name": "Discrete Mathematics",
    "branch": [
      "CSE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE4022",
    "name": "Computer Architecture",
    "branch": [
      "CSE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE4023",
    "name": "Automata Theory (FLAT)",
    "branch": [
      "CSE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE4024",
    "name": "Design & Analysis of Algorithms (DAA)",
    "branch": [
      "CSE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE4025",
    "name": "Biology",
    "branch": [
      "CSE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE4926",
    "name": "Computer Architecture Lab",
    "branch": [
      "CSE"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE4927",
    "name": "DAA Lab",
    "branch": [
      "CSE"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE5028",
    "name": "Software Engineering",
    "branch": [
      "CSE"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE5029",
    "name": "Compiler Design",
    "branch": [
      "CSE"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE5030",
    "name": "Operating Systems",
    "branch": [
      "CSE"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE5031",
    "name": "Object-Oriented Programming (OOP)",
    "branch": [
      "CSE"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE5932",
    "name": "Software Engineering Lab",
    "branch": [
      "CSE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE5933",
    "name": "OS Lab",
    "branch": [
      "CSE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE5934",
    "name": "OOP Lab",
    "branch": [
      "CSE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE5935",
    "name": "Constitution of India",
    "branch": [
      "CSE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE6036",
    "name": "Database Management Systems (DBMS)",
    "branch": [
      "CSE"
    ],
    "semester": 6,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE6037",
    "name": "Computer Networks",
    "branch": [
      "CSE"
    ],
    "semester": 6,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CSE6938",
    "name": "DBMS Lab",
    "branch": [
      "CSE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE6939",
    "name": "Computer Networks Lab",
    "branch": [
      "CSE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE6940",
    "name": "Professional Elective-I",
    "branch": [
      "CSE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE6941",
    "name": "Open Elective-I",
    "branch": [
      "CSE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE7942",
    "name": "Professional Elective-II",
    "branch": [
      "CSE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE7943",
    "name": "PE-III",
    "branch": [
      "CSE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE7944",
    "name": "Open Elective-II",
    "branch": [
      "CSE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE7945",
    "name": "Project Part-I",
    "branch": [
      "CSE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE8946",
    "name": "Professional Elective-IV",
    "branch": [
      "CSE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE8947",
    "name": "PE-V",
    "branch": [
      "CSE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE8948",
    "name": "Open Elective-III",
    "branch": [
      "CSE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CSE8949",
    "name": "Project Part-II",
    "branch": [
      "CSE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT3050",
    "name": "Analog & Digital Electronics",
    "branch": [
      "IT"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT3051",
    "name": "Data Structure & Algorithms",
    "branch": [
      "IT"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT3052",
    "name": "Computer Organization",
    "branch": [
      "IT"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT3053",
    "name": "Mathematics-III",
    "branch": [
      "IT"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT3954",
    "name": "Analog & Digital Lab",
    "branch": [
      "IT"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT3955",
    "name": "Data Structure Lab",
    "branch": [
      "IT"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT3956",
    "name": "IT Workshop",
    "branch": [
      "IT"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT4057",
    "name": "Discrete Mathematics",
    "branch": [
      "IT"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT4058",
    "name": "Computer Architecture",
    "branch": [
      "IT"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT4059",
    "name": "Communication Engg. & Coding Theory",
    "branch": [
      "IT"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT4060",
    "name": "Object-Oriented Programming",
    "branch": [
      "IT"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT4961",
    "name": "Architecture Lab",
    "branch": [
      "IT"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT4962",
    "name": "Communication Engg. Lab",
    "branch": [
      "IT"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT4963",
    "name": "OOP Lab",
    "branch": [
      "IT"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT5064",
    "name": "Design & Analysis of Algorithms",
    "branch": [
      "IT"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT5065",
    "name": "Software Engineering",
    "branch": [
      "IT"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT5066",
    "name": "Operating Systems",
    "branch": [
      "IT"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT5067",
    "name": "Environmental Sciences",
    "branch": [
      "IT"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT5968",
    "name": "DAA Lab",
    "branch": [
      "IT"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT5969",
    "name": "Software Engineering Lab",
    "branch": [
      "IT"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT5970",
    "name": "OS Lab",
    "branch": [
      "IT"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT6071",
    "name": "Database Management Systems",
    "branch": [
      "IT"
    ],
    "semester": 6,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT6072",
    "name": "Computer Networks",
    "branch": [
      "IT"
    ],
    "semester": 6,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT6073",
    "name": "Web Technology",
    "branch": [
      "IT"
    ],
    "semester": 6,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT6074",
    "name": "Economics",
    "branch": [
      "IT"
    ],
    "semester": 6,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "IT6975",
    "name": "DBMS Lab",
    "branch": [
      "IT"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT6976",
    "name": "Computer Networks Lab",
    "branch": [
      "IT"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT6977",
    "name": "Web Tech Lab",
    "branch": [
      "IT"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT6978",
    "name": "Professional Elective-I",
    "branch": [
      "IT"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT7979",
    "name": "Professional Elective-II",
    "branch": [
      "IT"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT7980",
    "name": "PE-III",
    "branch": [
      "IT"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT7981",
    "name": "Open Elective-I",
    "branch": [
      "IT"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT7982",
    "name": "OE-II",
    "branch": [
      "IT"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT7983",
    "name": "Project Part-I",
    "branch": [
      "IT"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT8984",
    "name": "Professional Elective-IV",
    "branch": [
      "IT"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT8985",
    "name": "PE-V",
    "branch": [
      "IT"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT8986",
    "name": "Open Elective-III",
    "branch": [
      "IT"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "IT8987",
    "name": "Project Part-II",
    "branch": [
      "IT"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE3088",
    "name": "Electronic Devices",
    "branch": [
      "ECE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ECE3089",
    "name": "Digital System Design",
    "branch": [
      "ECE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ECE3090",
    "name": "Signals and Systems",
    "branch": [
      "ECE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ECE3091",
    "name": "Network Theory",
    "branch": [
      "ECE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ECE3092",
    "name": "Mathematics-III",
    "branch": [
      "ECE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ECE3993",
    "name": "Electronic Devices Lab",
    "branch": [
      "ECE"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE3994",
    "name": "Digital System Design Lab",
    "branch": [
      "ECE"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE3995",
    "name": "Environmental Science",
    "branch": [
      "ECE"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE4096",
    "name": "Analog Communication",
    "branch": [
      "ECE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ECE4097",
    "name": "Analog Circuits",
    "branch": [
      "ECE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ECE4098",
    "name": "Microprocessors & Microcontrollers",
    "branch": [
      "ECE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ECE4099",
    "name": "Numerical Methods",
    "branch": [
      "ECE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ECE49100",
    "name": "Analog Comm Lab",
    "branch": [
      "ECE"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE49101",
    "name": "Analog Circuits Lab",
    "branch": [
      "ECE"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE49102",
    "name": "Microprocessor Lab",
    "branch": [
      "ECE"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE50103",
    "name": "Electromagnetic Waves",
    "branch": [
      "ECE"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ECE50104",
    "name": "Computer Architecture",
    "branch": [
      "ECE"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ECE50105",
    "name": "Digital Signal Processing (DSP)",
    "branch": [
      "ECE"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ECE50106",
    "name": "Control Systems",
    "branch": [
      "ECE"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ECE59107",
    "name": "DSP Lab",
    "branch": [
      "ECE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE59108",
    "name": "Environmental Science",
    "branch": [
      "ECE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE59109",
    "name": "Program Elective-I",
    "branch": [
      "ECE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE59110",
    "name": "Open Elective-I",
    "branch": [
      "ECE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE60111",
    "name": "Computer Networks",
    "branch": [
      "ECE"
    ],
    "semester": 6,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ECE60112",
    "name": "Economics for Engineers",
    "branch": [
      "ECE"
    ],
    "semester": 6,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ECE69113",
    "name": "Computer Networks Lab",
    "branch": [
      "ECE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE69114",
    "name": "Electronic Measurement Lab",
    "branch": [
      "ECE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE69115",
    "name": "PE-II",
    "branch": [
      "ECE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE69116",
    "name": "OE-II",
    "branch": [
      "ECE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE79117",
    "name": "Professional Elective-III",
    "branch": [
      "ECE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE79118",
    "name": "PE-IV",
    "branch": [
      "ECE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE79119",
    "name": "Open Elective-III",
    "branch": [
      "ECE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE79120",
    "name": "Project Part-I",
    "branch": [
      "ECE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE89121",
    "name": "Professional Elective-V",
    "branch": [
      "ECE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE89122",
    "name": "PE-VI",
    "branch": [
      "ECE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE89123",
    "name": "Open Elective-IV",
    "branch": [
      "ECE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ECE89124",
    "name": "Project Part-II",
    "branch": [
      "ECE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE30125",
    "name": "Electric Circuit Theory",
    "branch": [
      "EE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE30126",
    "name": "Analog Electronics",
    "branch": [
      "EE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE30127",
    "name": "Electromagnetic Fields",
    "branch": [
      "EE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE30128",
    "name": "Electrical Machines-I",
    "branch": [
      "EE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE30129",
    "name": "Engineering Mechanics",
    "branch": [
      "EE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE39130",
    "name": "Electric Circuits Lab",
    "branch": [
      "EE"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE39131",
    "name": "Analog Electronics Lab",
    "branch": [
      "EE"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE39132",
    "name": "Electrical Machines-I Lab",
    "branch": [
      "EE"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE40133",
    "name": "Digital Electronics",
    "branch": [
      "EE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE40134",
    "name": "Electrical Machines-II",
    "branch": [
      "EE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE40135",
    "name": "Power Electronics",
    "branch": [
      "EE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE40136",
    "name": "Signals and Systems",
    "branch": [
      "EE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE40137",
    "name": "Biology",
    "branch": [
      "EE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE49138",
    "name": "Digital Electronics Lab",
    "branch": [
      "EE"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE49139",
    "name": "Electrical Machines-II Lab",
    "branch": [
      "EE"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE49140",
    "name": "Power Electronics Lab",
    "branch": [
      "EE"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE50141",
    "name": "Power Systems-I",
    "branch": [
      "EE"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE50142",
    "name": "Control Systems",
    "branch": [
      "EE"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE50143",
    "name": "Microprocessors and Microcontrollers",
    "branch": [
      "EE"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE59144",
    "name": "Power Systems-I Lab",
    "branch": [
      "EE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE59145",
    "name": "Control Systems Lab",
    "branch": [
      "EE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE59146",
    "name": "Microprocessor Lab",
    "branch": [
      "EE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE59147",
    "name": "PE-I",
    "branch": [
      "EE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE59148",
    "name": "OE-I",
    "branch": [
      "EE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE60149",
    "name": "Power Systems-II",
    "branch": [
      "EE"
    ],
    "semester": 6,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE60150",
    "name": "Measurements and Instrumentation",
    "branch": [
      "EE"
    ],
    "semester": 6,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE69151",
    "name": "Power Systems-II Lab",
    "branch": [
      "EE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE69152",
    "name": "Measurements Lab",
    "branch": [
      "EE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE69153",
    "name": "PE-II",
    "branch": [
      "EE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE69154",
    "name": "OE-II",
    "branch": [
      "EE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE70155",
    "name": "Electric Drives",
    "branch": [
      "EE"
    ],
    "semester": 7,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "EE79156",
    "name": "Electric Drives Lab",
    "branch": [
      "EE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE79157",
    "name": "PE-III",
    "branch": [
      "EE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE79158",
    "name": "PE-IV",
    "branch": [
      "EE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE79159",
    "name": "OE-III",
    "branch": [
      "EE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE79160",
    "name": "Project Part-I",
    "branch": [
      "EE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE89161",
    "name": "Professional Elective-V",
    "branch": [
      "EE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE89162",
    "name": "PE-VI",
    "branch": [
      "EE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE89163",
    "name": "Open Elective-IV",
    "branch": [
      "EE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "EE89164",
    "name": "Project Part-II",
    "branch": [
      "EE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME30165",
    "name": "Thermodynamics",
    "branch": [
      "ME"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ME30166",
    "name": "Fluid Mechanics & Fluid Machines",
    "branch": [
      "ME"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ME30167",
    "name": "Applied Mechanics",
    "branch": [
      "ME"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ME30168",
    "name": "Manufacturing Processes",
    "branch": [
      "ME"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ME30169",
    "name": "Biology",
    "branch": [
      "ME"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ME39170",
    "name": "Fluid Mechanics Lab",
    "branch": [
      "ME"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME39171",
    "name": "Manufacturing Processes Lab",
    "branch": [
      "ME"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME39172",
    "name": "Machine Drawing",
    "branch": [
      "ME"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME40173",
    "name": "Applied Thermodynamics",
    "branch": [
      "ME"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ME40174",
    "name": "Strength of Materials",
    "branch": [
      "ME"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ME40175",
    "name": "Materials Engineering",
    "branch": [
      "ME"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ME40176",
    "name": "Kinematics & Theory of Machines",
    "branch": [
      "ME"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ME49177",
    "name": "Applied Thermodynamics Lab",
    "branch": [
      "ME"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME49178",
    "name": "Strength of Materials Lab",
    "branch": [
      "ME"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME49179",
    "name": "Materials Engg Lab",
    "branch": [
      "ME"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME50180",
    "name": "Heat Transfer",
    "branch": [
      "ME"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ME50181",
    "name": "Solid Mechanics",
    "branch": [
      "ME"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ME50182",
    "name": "Dynamics of Machinery",
    "branch": [
      "ME"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ME50183",
    "name": "Manufacturing Technology",
    "branch": [
      "ME"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ME59184",
    "name": "Heat Transfer Lab",
    "branch": [
      "ME"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME59185",
    "name": "Dynamics of Machinery Lab",
    "branch": [
      "ME"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME59186",
    "name": "Manufacturing Tech Lab",
    "branch": [
      "ME"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME59187",
    "name": "PE-I",
    "branch": [
      "ME"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME60188",
    "name": "Design of Machine Elements",
    "branch": [
      "ME"
    ],
    "semester": 6,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ME60189",
    "name": "Machining and Machine Tools",
    "branch": [
      "ME"
    ],
    "semester": 6,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "ME69190",
    "name": "Machining Lab",
    "branch": [
      "ME"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME69191",
    "name": "PE-II",
    "branch": [
      "ME"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME69192",
    "name": "PE-III",
    "branch": [
      "ME"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME69193",
    "name": "OE-I",
    "branch": [
      "ME"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME79194",
    "name": "Professional Elective-IV",
    "branch": [
      "ME"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME79195",
    "name": "PE-V",
    "branch": [
      "ME"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME79196",
    "name": "Open Elective-II",
    "branch": [
      "ME"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME79197",
    "name": "OE-III",
    "branch": [
      "ME"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME79198",
    "name": "Project Part-I",
    "branch": [
      "ME"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME89199",
    "name": "Professional Elective-VI",
    "branch": [
      "ME"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME89200",
    "name": "Open Elective-IV",
    "branch": [
      "ME"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME89201",
    "name": "OE-V",
    "branch": [
      "ME"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "ME89202",
    "name": "Project Part-II",
    "branch": [
      "ME"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE30203",
    "name": "Solid Mechanics",
    "branch": [
      "CE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE30204",
    "name": "Surveying & Geomatics",
    "branch": [
      "CE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE30205",
    "name": "Engineering Geology",
    "branch": [
      "CE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE30206",
    "name": "Fluid Mechanics",
    "branch": [
      "CE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE30207",
    "name": "Mathematics-III",
    "branch": [
      "CE"
    ],
    "semester": 3,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE39208",
    "name": "Surveying Lab",
    "branch": [
      "CE"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE39209",
    "name": "Solid Mechanics Lab",
    "branch": [
      "CE"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE39210",
    "name": "Fluid Mechanics Lab",
    "branch": [
      "CE"
    ],
    "semester": 3,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE40211",
    "name": "Concrete Technology",
    "branch": [
      "CE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE40212",
    "name": "Structural Analysis-I",
    "branch": [
      "CE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE40213",
    "name": "Soil Mechanics",
    "branch": [
      "CE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE40214",
    "name": "Environmental Engineering-I",
    "branch": [
      "CE"
    ],
    "semester": 4,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE49215",
    "name": "Concrete Lab",
    "branch": [
      "CE"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE49216",
    "name": "Soil Mechanics Lab",
    "branch": [
      "CE"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE49217",
    "name": "Environmental Engg Lab",
    "branch": [
      "CE"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE49218",
    "name": "Drawing Lab",
    "branch": [
      "CE"
    ],
    "semester": 4,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE50219",
    "name": "Structural Analysis-II",
    "branch": [
      "CE"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE50220",
    "name": "Design of RC Structures",
    "branch": [
      "CE"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE50221",
    "name": "Hydrology & Water Resources",
    "branch": [
      "CE"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE50222",
    "name": "Transportation Engineering",
    "branch": [
      "CE"
    ],
    "semester": 5,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE59223",
    "name": "RC Design Detailing",
    "branch": [
      "CE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE59224",
    "name": "Transportation Lab",
    "branch": [
      "CE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE59225",
    "name": "PE-I",
    "branch": [
      "CE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE59226",
    "name": "OE-I",
    "branch": [
      "CE"
    ],
    "semester": 5,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE60227",
    "name": "Design of Steel Structures",
    "branch": [
      "CE"
    ],
    "semester": 6,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE60228",
    "name": "Foundation Engineering",
    "branch": [
      "CE"
    ],
    "semester": 6,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE60229",
    "name": "Environmental Engineering-II",
    "branch": [
      "CE"
    ],
    "semester": 6,
    "syllabusDetails": "Core Theory"
  },
  {
    "subjectCode": "CE69230",
    "name": "Steel Design Detailing",
    "branch": [
      "CE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE69231",
    "name": "Foundation Engg Lab",
    "branch": [
      "CE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE69232",
    "name": "PE-II",
    "branch": [
      "CE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE69233",
    "name": "PE-III",
    "branch": [
      "CE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE69234",
    "name": "OE-II",
    "branch": [
      "CE"
    ],
    "semester": 6,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE79235",
    "name": "Professional Elective-IV",
    "branch": [
      "CE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE79236",
    "name": "PE-V",
    "branch": [
      "CE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE79237",
    "name": "Open Elective-III",
    "branch": [
      "CE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE79238",
    "name": "Project Part-I",
    "branch": [
      "CE"
    ],
    "semester": 7,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE89239",
    "name": "Professional Elective-VI",
    "branch": [
      "CE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE89240",
    "name": "Open Elective-IV",
    "branch": [
      "CE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE89241",
    "name": "OE-V",
    "branch": [
      "CE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  },
  {
    "subjectCode": "CE89242",
    "name": "Project Part-II",
    "branch": [
      "CE"
    ],
    "semester": 8,
    "syllabusDetails": "Practical/Elective"
  }
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
