const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const donationRoutes = require('./routes/donations');
const matchingRoutes = require('./routes/matching');
const userRoutes = require('./routes/users');
const rescueRoutes = require('./routes/rescues');
const analyticsRoutes = require('./routes/analytics');
const notificationRoutes = require('./routes/notifications');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/matching', matchingRoutes);
app.use('/api', userRoutes);
app.use('/api/rescues', rescueRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/notifications', notificationRoutes);

module.exports = app;
