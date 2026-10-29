const mongoose = require('mongoose');
require('dotenv').config();

const { connectDB } = require('../config/db');

async function seed() {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/foodrescue-ai';
  await connectDB(uri);

  const counts = {
    users: 0,
    donations: 0,
    shelters: 0,
    drivers: 0,
    rescues: 0,
    notifications: 0,
  };

  console.log('Seed data initialized. Counts:', counts);
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
