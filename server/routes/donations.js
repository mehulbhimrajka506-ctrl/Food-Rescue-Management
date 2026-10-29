const express = require('express');
const Donation = require('../models/Donation');
const { authMiddleware, requireRole } = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  const donations = await Donation.find().sort({ createdAt: -1 });
  res.json({ donations });
});

router.post('/', authMiddleware, requireRole('donor'), async (req, res) => {
  try {
    const { foodType, category, quantity, unit, location, description, expiryTime } = req.body;
    if (!foodType || !category || !quantity || !location || !expiryTime) {
      return res.status(400).json({ message: 'Please provide foodType, category, quantity, location and expiryTime' });
    }

    const donation = await Donation.create({
      donorId: req.user.id,
      foodType,
      category,
      quantity,
      unit: unit || 'kg',
      location: {
        lat: location.lat,
        lng: location.lng,
      },
      description: description || '',
      expiryTime: new Date(expiryTime),
      status: 'POSTED',
    });

    res.status(201).json({ donation });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create donation', error: error.message });
  }
});

module.exports = router;
