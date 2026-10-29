const donors = [
  { name: 'Green Leaf Restaurant', email: 'greenleaf@foodrescue.ai', organization: 'Green Leaf Restaurant', role: 'donor', location: { lat: 26.9124, lng: 75.7873, address: 'Jaipur' } },
  { name: 'Saffron Table', email: 'saffron@foodrescue.ai', organization: 'Saffron Table', role: 'donor', location: { lat: 26.9227, lng: 75.7962, address: 'Vaishali Nagar' } },
];

const shelters = [
  { name: 'Hope Shelter', organization: 'Hope Shelter', role: 'shelter', location: { lat: 26.9191, lng: 75.7704, address: 'Mansarovar' }, capacity: 180, currentCapacity: 50, acceptedFoodTypes: ['rice', 'vegetables', 'bread', 'cooked'] },
  { name: 'CareNest', organization: 'CareNest', role: 'shelter', location: { lat: 26.8645, lng: 75.8125, address: 'Gopalpura' }, capacity: 140, currentCapacity: 30, acceptedFoodTypes: ['vegetables', 'fruit', 'rice'] },
  { name: 'Meals on Wheels', organization: 'Meals on Wheels', role: 'shelter', location: { lat: 26.8485, lng: 75.8043, address: 'Sodala' }, capacity: 210, currentCapacity: 70, acceptedFoodTypes: ['cooked', 'rice', 'bread', 'vegetables'] },
];

const drivers = [
  { name: 'Rahul Sharma', email: 'rahul@foodrescue.ai', organization: 'Volunteer Driver', role: 'driver', location: { lat: 26.9157, lng: 75.8217, address: 'Jaipur' }, stats: { rescuesCompleted: 18, kgDelivered: 220, avgResponseSeconds: 420 } },
  { name: 'Neha Verma', email: 'neha@foodrescue.ai', organization: 'Volunteer Driver', role: 'driver', location: { lat: 26.8859, lng: 75.7838, address: 'Jaipur' }, stats: { rescuesCompleted: 16, kgDelivered: 180, avgResponseSeconds: 500 } },
];

module.exports = { donors, shelters, drivers };
