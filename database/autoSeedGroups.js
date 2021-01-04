require('dotenv').config();
const db = require('../models');

const testGroups = [
  { name: 'Does' },
  { name: 'Simpsons' },
  { name: 'Cleavers' }
];

module.exports = async function seedGroups () {
  testGroups.forEach(async group => {
    try {
      const groupTemp = await db.Group.create(group);
      console.log(`GroupId: ${groupTemp.id}: ${groupTemp.name} created`);
    } catch (err) {
      console.error(err);
    }
  });
};
