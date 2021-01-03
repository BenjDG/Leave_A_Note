require('dotenv').config();
const db = require('../models');

const testNotes = [
  {
    title: "It's no secret!",
    body: "I've been Amelia Earhart all along!",
    UserId: 1
  },
  { title: 'Mmmm', body: 'Donuts', UserId: 2 },
  { title: 'Cowabunga!', body: "Don't have a cow, man!", UserId: 4 },
  { title: 'Shopping list', body: 'Eggs, milk, cheese, crackers', UserId: 6 },
  { title: 'Leave it to me', body: "and my big ol' chompers", UserId: 9 }
];

module.exports = async function seedNotes () {
  await testNotes.forEach(async note => {
    try {
      const noteTemp = await db.Note.create(note);
      console.log(`Note Id: ${noteTemp.id}: ${noteTemp.title} created`);
    } catch (err) {
      console.error(err);
    }
  });
};
