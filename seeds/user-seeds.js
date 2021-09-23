const { User } = require('../models');

const userData = [
  {
    username: "Cat",
    email: "cat@gmail.com",
    password: "password1234"
  },
  {
    username: "Jaya",
    email: "jaya@gmail.com",
    password: "password1234"
  },
  {
    username: "Mark",
    email: "mark@gmail.com",
    password: "password1234"
  },
  {
    username: "shane",
    email: "shane@gmail.com",
    password: "password1234"
  },
  {
    username: "John",
    email: "john@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;
