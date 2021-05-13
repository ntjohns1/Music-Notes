const { Event } = require('../models');

const eventData = [
    {
        year: 2021,
        month: 05,
        day: 12,
        hour: 18,
        minute: 15,
        summary: 'This is a test',
        decription: 'This is for a test',
        student_id: 2,
        teacher_id: 1,
        calendar_id: 'e2brpjljkhls9f9kfdetek37uk',
    },
    {
        year: 2021,
        month: 05,
        day: 12,
        hour: 18,
        minute: 15,
        summary: 'This is a test',
        decription: 'This is for a test',
        student_id: 3,
        teacher_id: 1,
        calendar_id: '7gavhncndofv36d1bbl7b7vie8',
    },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;