const { User } = require('../models');

const userData = [
    {
        first_name: 'nelson',
        last_name: 'johns',
        username: 'TeacherNelson',
        password: '2342342adsada',
        email: 'nelson@gmail.com',
        is_teacher: true,
    },
    {
        first_name: 'ashe',
        last_name: 'smith',
        username: 'Ashter1',
        password: '1234asdf',
        email: 'ashe@gmail.com',
    },
    {
        first_name: 'lily',
        last_name: 'peterson',
        username: 'LilyStar',
        password: 'asdasda123123',
        email: 'lily@gmail.com',
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;