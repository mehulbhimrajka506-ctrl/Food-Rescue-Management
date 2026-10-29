const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: { type: String, default: '' },
  },
  currentLocation: {
    lat: { type: Number, default: 0 },
    lng: { type: Number, default: 0 },
    updatedAt: { type: Date, default: Date.now },
  },
  availability: { type: Boolean, default: true },
  currentAssignment: { type: mongoose.Schema.Types.ObjectId, ref: 'Rescue', default: null },
  stats: {
    rescuesCompleted: { type: Number, default: 0 },
    kgDelivered: { type: Number, default: 0 },
    avgResponseSeconds: { type: Number, default: 0 },
  },
}, { timestamps: true });

module.exports = mongoose.model('Driver', driverSchema);
