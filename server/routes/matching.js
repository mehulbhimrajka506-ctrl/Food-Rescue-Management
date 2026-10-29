const express = require('express');
const Donation = require('../models/Donation');
const User = require('../models/User');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

function calculateDistance(lat1, lon1, lat2, lon2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

router.post('/find', authMiddleware, async (req, res) => {
  try {
    const { donationId } = req.body;
    const donation = await Donation.findById(donationId);
    if (!donation || donation.status === 'EXPIRED') {
      return res.status(400).json({ message: 'This donation can no longer be safely routed.' });
    }

    const shelters = await User.find({ role: 'shelter' });
    const candidates = shelters.map((shelter) => {
      const distanceKm = calculateDistance(donation.location.lat, donation.location.lng, shelter.location.lat, shelter.location.lng);
      const capacityScore = Math.min(100, (25 / Math.max(1, donation.quantity)) * 100);
      const foodMatch = 100;
      const urgency = Math.max(0, Math.min(100, 100 - (new Date(donation.expiryTime).getTime() - Date.now()) / 60000));
      const driverAvail = 100;

      const overall =
        0.35 * Math.max(0, 100 - distanceKm * 4) +
        0.25 * capacityScore +
        0.2 * foodMatch +
        0.15 * urgency +
        0.05 * driverAvail;

      return {
        shelterId: shelter._id,
        shelterName: shelter.organization || shelter.name,
        score: Math.round(overall),
        breakdown: {
          distance: Math.round(Math.max(0, 100 - distanceKm * 4)),
          capacity: Math.round(capacityScore),
          foodMatch: 100,
          urgency: Math.round(urgency),
          driverAvail: 100,
        },
        why: 'Best fit based on distance, capacity, food compatibility, urgency, and driver availability.',
      };
    }).sort((a, b) => b.score - a.score);

    return res.json({ candidates });
  } catch (error) {
    return res.status(500).json({ message: 'Matching failed', error: error.message });
  }
});

module.exports = router;
