const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');

const VALID_BRANCHES = new Set(['CSE', 'IT', 'ECE', 'EE', 'ME', 'CE']);
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 60;
const requestLog = new Map();

const applyRateLimit = (req, res, next) => {
  const clientKey = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const existingWindow = requestLog.get(clientKey) || [];
  const activeWindow = existingWindow.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (activeWindow.length >= RATE_LIMIT_MAX_REQUESTS) {
    return res.status(429).json({ message: 'Too many requests. Please try again later.' });
  }

  activeWindow.push(now);
  requestLog.set(clientKey, activeWindow);
  next();
};

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
      const semester = Number.parseInt(sem, 10);
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
