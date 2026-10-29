const express = require('express');
const User = require('../models/User');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.get('/shelters', authMiddleware, async (req, res) => {
  const shelters = await User.find({ role: 'shelter' });
  res.json({ shelters });
});

router.get('/drivers', authMiddleware, async (req, res) => {
  const drivers = await User.find({ role: 'driver' });
  res.json({ drivers });
});

module.exports = router;
