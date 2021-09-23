const { Post } = require('../models');

const postData = [
  {
    title: 'Sequelize',
    post_text: 'Sequelize has several built in, handy data types that you can use when you define a model.',
    user_id: 1,
  },
  {
    title: 'Handlebars',
    post_text: 'Handlebars is a very useful npm package that allows you to use templates in your code, making things more modular, re-usable, and maintainable.',
    user_id: 2,
  },
  {
    title: 'dotenv',
    post_text: 'DotEnv is a lightweight npm package that automatically loads environment variables from a . env file into the process. env object',
    user_id: 2,
  },
  {
    title: 'bcrypt',
    post_text: 'A library to help you hash passwords.',
    user_id: 3,
  },
  {
    title: 'Heroku',
    post_text: 'Heroku is a cloud platform as a service supporting several programming languages.',
    user_id: 4,
  },
  {
    title: 'Express.js',
    post_text: 'Express.js is an easy way to set up a server with JavaScript. With a few lines of code, you can be on your way to hosting a dynamic webpage.',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;