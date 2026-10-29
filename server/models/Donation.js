const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  foodType: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, default: 'kg' },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  description: { type: String, default: '' },
  expiryTime: { type: Date, required: true },
  status: {
    type: String,
    enum: ['POSTED', 'MATCHED', 'DRIVER_ASSIGNED', 'PICKED_UP', 'DELIVERED', 'EXPIRED'],
    default: 'POSTED',
  },
  matchedShelterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  createdAt: { type: Date, default: Date.now },
  deliveredAt: { type: Date, default: null },
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);
