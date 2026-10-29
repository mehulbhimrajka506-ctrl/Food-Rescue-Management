const express = require('express');
const Donation = require('../models/Donation');
const Rescue = require('../models/Rescue');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  const rescues = await Rescue.find().sort({ createdAt: -1 });
  return res.json({ rescues });
});

router.patch('/:id/status', authMiddleware, async (req, res) => {
  const { status } = req.body;
  const rescue = await Rescue.findById(req.params.id);
  if (!rescue) return res.status(404).json({ message: 'Rescue not found' });

  rescue.status = status;
  if (status === 'PICKED_UP') rescue.pickupTime = new Date();
  if (status === 'DELIVERED') rescue.deliveryTime = new Date();
  await rescue.save();

  await Donation.findByIdAndUpdate(rescue.donationId, { status: status === 'DELIVERED' ? 'DELIVERED' : rescue.status });
  return res.json({ rescue });
});

module.exports = router;
