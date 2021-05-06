const { ReadStream } = require('node:fs');
const Student = require('./Student');
const Teacher = require('./Teacher');

Teacher.hasMany(Student, {
    foreignKey: 'teacher_id',
    onDelete: 'CASCADE',
});

Student.belongsTo (Teacher, {
    foreignKey: 'teacher_id',
});

