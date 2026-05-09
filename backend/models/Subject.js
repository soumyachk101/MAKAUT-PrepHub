const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  subjectCode: { type: String, required: true },
  name: { type: String, required: true },
  branch: [{ type: String, required: true }],
  semester: { type: Number, required: true },
  syllabusDetails: { type: String }
});

subjectSchema.index({ subjectCode: 1, name: 1 });

module.exports = mongoose.model('Subject', subjectSchema);
