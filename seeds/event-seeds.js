const { Event } = require('../models');

const eventData = [
    {
        year: 2021,
        month: 05,
        day: 12,
        hour: 18,
        summary: 'This is a test',
        description: 'This is for a test',
        calendar_id: 'gfld5lhl30i4vsjn439t2usnlc',
    },
    {
        year: 2021,
        month: 05,
        day: 12,
        hour: 18,
        summary: 'This is a test',
        description: 'This is for a test',
        calendar_id: '7gavhncndofv36d1bbl7b7vie8',
    },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;