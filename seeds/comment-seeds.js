const { Comment } = require('../models');

const commentData = [
    {
        date: '2018-01-01',
        content: "Please remember to practice finger placement.",
    },
    {
        date: '2018-01-01',
        content: "Please remember to practice finger placement.",
        student_id: 3,
        teacher_id: 1,
    },
    {
        date: '2018-01-08',
        content: "Teacher is out sick.",
        student_id: 2,
        teacher_id: 1,
    },
    {
        date: '2018-01-08',
        content: "Teacher is out sick.",
        student_id: 3,
        teacher_id: 1,
    },
    {
        date: '2018-01-01',
        content: "Do not forget that you have a payment due.",
        student_id: 2,
        teacher_id: 1,
    },
    {
        date: '2018-01-01',
        content: "Do not forget that you have a payment due.",
    },
    {
        date: '2018-02-01',
        content: "Do not forget that you have a payment due.",
        student_id: 2,
        teacher_id: 1,
    },
    {
        date: '2018-02-01',
        content: "Do not forget that you have a payment due.",
        student_id: 3,
        teacher_id: 1,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;