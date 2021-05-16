const { Event } = require('../models');

const eventData = [
    {
        year: 2021,
        month: 05,
        day: 12,
        hour: 18,
        summary: `Ashes's Lesson with Mr. Music Teacher `,
        description: 'Practicing finger placement and posture',
        calendar_id: 'gfld5lhl30i4vsjn439t2usnlc',
        user_id: 2
    },
    {
        year: 2021,
        month: 05,
        day: 05,
        hour: 09,
        summary: `Lily's Lesson with Mr. Music Teacher `,
        description: 'Preparing for the music competition',
        calendar_id: '7gavhncndofv36d1bbl7b7vie8',
        user_id: 3
    },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;