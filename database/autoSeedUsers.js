require('dotenv').config();
const db = require('../models');

const testUsers = [
  {
    first_name: 'Jane',
    last_name: 'Doe',
    email: '1@2.com',
    password: process.env.JANE_PASSWORD,
    GroupId: 1
  },
  {
    first_name: 'Homer',
    last_name: 'Simpson',
    email: 'homer@simpsons.com',
    password: 'doh',
    GroupId: 2
  },
  {
    first_name: 'Marge',
    last_name: 'Simpson',
    email: 'marge@simpsons.com',
    password: 'ohno',
    GroupId: 2
  },
  {
    first_name: 'Lisa',
    last_name: 'Simpson',
    email: 'lisa@simpsons.com',
    password: 'barisax',
    GroupId: 2
  },
  {
    first_name: 'Bart',
    last_name: 'Simpson',
    email: 'bart@simpsons.com',
    password: 'eatmyshorts',
    GroupId: 2
  },
  {
    first_name: 'Maggie',
    last_name: 'Simpson',
    email: 'maggie@simpsons.com',
    password: 'maggiedidit',
    GroupId: 2
  },
  {
    first_name: 'June',
    last_name: 'Cleaver',
    email: 'june@cleavers.com',
    password: 'june',
    GroupId: 3
  },
  {
    first_name: 'Ward',
    last_name: 'Cleaver',
    email: 'ward@cleavers.com',
    password: 'ward',
    GroupId: 3
  },
  {
    first_name: 'Wally',
    last_name: 'Cleaver',
    email: 'wally@cleavers.com',
    password: 'wally',
    GroupId: 3
  },
  {
    first_name: 'Beaver',
    last_name: 'Cleaver',
    email: 'beaver@cleavers.com',
    password: 'Beaver',
    GroupId: 3
  }
];

module.exports = async function seedUsers () {
  await testUsers.forEach(async user => {
    try {
      const userTemp = await db.User.create(user);
      console.log(`User Id: ${userTemp.id}: ${userTemp.email} created`);
    } catch (err) {
      console.error(err);
    }
  });
};
