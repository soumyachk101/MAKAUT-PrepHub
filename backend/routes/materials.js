const express = require('express');
const router = express.Router();
const Material = require('../models/Material');

// GET /api/materials/:subjectId
router.get('/:subjectId', async (req, res) => {
  try {
    const { subjectId } = req.params;
    const materials = await Material.find({ subjectId });
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
