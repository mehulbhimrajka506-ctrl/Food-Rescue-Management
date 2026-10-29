const express = require('express');
const Donation = require('../models/Donation');

const router = express.Router();

router.get('/dashboard', async (req, res) => {
  const donations = await Donation.find();
  res.json({
    donations,
    summary: {
      total: donations.length,
      delivered: donations.filter((d) => d.status === 'DELIVERED').length,
      expired: donations.filter((d) => d.status === 'EXPIRED').length,
    },
  });
});

router.get('/impact', async (req, res) => {
  const donations = await Donation.find({ status: 'DELIVERED' });
  const totalKg = donations.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
  res.json({
    kgRescued: totalKg,
    mealsServed: Math.round(totalKg * 2.5),
    donations: donations.length,
    deliveries: donations.length,
    co2Avoided: Math.round(totalKg * 1.4),
  });
});

module.exports = router;
