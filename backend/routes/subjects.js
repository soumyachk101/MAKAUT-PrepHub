const express = require('express');
const { rateLimit } = require('express-rate-limit');

const router = express.Router();
const Subject = require('../models/Subject');

const VALID_BRANCHES = new Set(['CSE', 'IT', 'ECE', 'EE', 'ME', 'CE']);
const applyRateLimit = rateLimit({
  windowMs: 60 * 1000,
  limit: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many requests. Please try again later.' },
});

// GET /api/subjects?branch=CSE&sem=4
router.get('/', applyRateLimit, async (req, res) => {
  try {
    const { branch, sem } = req.query;
    const filter = {};

    if (branch) {
      if (typeof branch !== 'string' || !VALID_BRANCHES.has(branch)) {
        return res.status(400).json({ message: 'Invalid branch.' });
      }
      filter.branch = branch;
    }

    if (sem) {
      const semester = parseInt(sem, 10);
      if (!Number.isInteger(semester) || semester < 1 || semester > 8) {
        return res.status(400).json({ message: 'Invalid semester.' });
      }
      filter.semester = semester;
    }

    const subjects = await Subject.find(filter).sort({ subjectCode: 1, name: 1 });
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
