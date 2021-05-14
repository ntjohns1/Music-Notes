const { Comment } = require('../models');

const commentData = [
    {
        date: '2018-01-01',
        content: "Please remember to practice finger placement.",
    },
    {
        date: '2018-01-01',
        content: "Do not forget that you have a payment due.",
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;