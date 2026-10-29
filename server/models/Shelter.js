const mongoose = require('mongoose');

const shelterSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: { type: String, default: '' },
  },
  capacity: { type: Number, default: 200 },
  currentCapacity: { type: Number, default: 0 },
  acceptedFoodTypes: { type: [String], default: [] },
  status: { type: String, default: 'active' },
}, { timestamps: true });

module.exports = mongoose.model('Shelter', shelterSchema);
