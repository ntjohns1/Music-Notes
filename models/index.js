// const { ReadStream } = require('node:fs');
const User = require('./User');
const Teacher = require('./Teacher');

// Teacher.hasMany(Student, {
//     foreignKey: 'teacher_id',
//     onDelete: 'CASCADE',
// });

// Student.belongsTo (Teacher, {
//     foreignKey: 'teacher_id',
// });

module.exports = { User };