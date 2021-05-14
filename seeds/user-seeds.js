const { User } = require('../models');

const userData = [
    {
        first_name: 'nelson',
        last_name: 'johns',
        password: 'password1234',
        email: 'nelson@gmail.com',
        is_teacher: true,
    },
    {
        first_name: 'ashe',
        last_name: 'smith',
        password: 'password1234',
        email: 'ashe@gmail.com',
    },
    {
        first_name: 'lily',
        last_name: 'peterson',
        password: 'password1234',
        email: 'lily@gmail.com',
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;