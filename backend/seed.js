const mongoose = require('mongoose');
const Subject = require('./models/Subject');
const Material = require('./models/Material');
const { subjects, buildMaterials } = require('./data/subjects');

const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/prephub';

const seedDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB for seeding');

    await Subject.deleteMany({});
    await Material.deleteMany({});

    const createdSubjects = await Subject.insertMany(subjects);
    console.log(`Seeded ${createdSubjects.length} subjects`);

    const materials = buildMaterials(createdSubjects);
    const createdMaterials = await Material.insertMany(materials);
    console.log(`Seeded ${createdMaterials.length} materials`);

    mongoose.connection.close();
    console.log('Database seeded and connection closed');
  } catch (err) {
    console.error('Error seeding DB:', err);
    mongoose.connection.close();
  }
};

seedDB();
