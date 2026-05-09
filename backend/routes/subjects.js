const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');

// GET /api/subjects?branch=CSE&sem=4
router.get('/', async (req, res) => {
  try {
    const { branch, sem } = req.query;
    let filter = {};
    if (branch) filter.branch = branch;
    if (sem) filter.semester = Number(sem);
<<<<<<< HEAD

=======

>>>>>>> b5a406b (initial commit)
    const subjects = await Subject.find(filter);
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
