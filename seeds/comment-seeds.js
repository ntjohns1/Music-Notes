const { Comment } = require('../models');

const commentData = [
    {
        date: '2021-05-05',
        content: "Please remember to practice finger placement.",
        user_id: 2,
    },
    {
        date: '2021-05-06',
        content: "Do not forget that you have a payment due.",
        user_id: 3,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;