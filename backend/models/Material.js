const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  title: { type: String, required: true },
<<<<<<< HEAD
  type: {
    type: String,
    enum: ['Notes', 'PYQ', 'Organizer', 'Syllabus'],
    required: true
=======
  type: {
    type: String,
    enum: ['Notes', 'PYQ', 'Organizer', 'Syllabus'],
    required: true
>>>>>>> b5a406b (initial commit)
  },
  fileUrl: { type: String, required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  uploadedBy: { type: String, default: 'Admin' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Material', materialSchema);
