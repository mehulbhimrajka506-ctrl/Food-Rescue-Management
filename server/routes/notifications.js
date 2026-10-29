const express = require('express');
const Notification = require('../models/Notification');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  const notifications = await Notification.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json({ notifications });
});

router.patch('/:id/read', authMiddleware, async (req, res) => {
  const notification = await Notification.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    { read: true },
    { new: true }
  );

  if (!notification) {
    return res.status(404).json({ message: 'Notification not found' });
  }

  return res.json({ notification });
});

module.exports = router;
