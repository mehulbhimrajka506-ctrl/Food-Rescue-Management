const mongoose = require('mongoose');

const rescueSchema = new mongoose.Schema({
  donationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Donation', required: true },
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  shelterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  matchScore: { type: Number, default: 0 },
  matchBreakdown: {
    distance: { type: Number, default: 0 },
    capacity: { type: Number, default: 0 },
    foodMatch: { type: Number, default: 0 },
    urgency: { type: Number, default: 0 },
    driverAvail: { type: Number, default: 0 },
  },
  status: {
    type: String,
    enum: ['MATCHED', 'DRIVER_ASSIGNED', 'PICKED_UP', 'DELIVERED'],
    default: 'MATCHED',
  },
  pickupTime: { type: Date, default: null },
  deliveryTime: { type: Date, default: null },
  routePolyline: { type: [Object], default: [] },
}, { timestamps: true });

module.exports = mongoose.model('Rescue', rescueSchema);
