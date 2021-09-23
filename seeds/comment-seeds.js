const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Hello, this is my first comment. Thanks!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Hi, entering my second text.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "I am hungry",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Time for some cookies.",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Burrp!! I am full.",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "Going to sleep...zzzzzzz ",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
