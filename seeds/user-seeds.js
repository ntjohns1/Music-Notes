const { User } = require('../models');

const userData = [
    {
        first_name: 'Nelson',
        last_name: 'Johns',
        username: 'TeacherNelson',
        password: '2342342adsada',
        email: 'nelson@gmail.com',
        is_teacher: true,
    },
    {
        first_name: 'Ashe',
        last_name: 'Smith',
        username: 'Ashter1',
        password: '1234asdf',
        email: 'ashe@gmail.com',
    },
    {
        first_name: 'Lily',
        last_name: 'Peterson',
        username: 'LilyStar',
        password: 'asdasda123123',
        email: 'lily@gmail.com',
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;