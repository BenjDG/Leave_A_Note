require('dotenv').config();
const db = require('../models');

module.exports = async function seed () {
  const jane = await db.User.create({
    first_name: 'Jane',
    last_name: 'Doe',
    email: '1@2.com',
    password: process.env.JANE_PASSWORD
  });
  console.log("Jane's auto-generated ID:", jane.id);
};
