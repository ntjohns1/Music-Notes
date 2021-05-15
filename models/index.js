const User = require('./User');
const Comment = require('./Comment');
const Event = require('./Event');

Event.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Event.hasMany(Comment, {
    foreignKey: 'eventId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});


// User.hasMany(Comment, {
//     // foreignKey: 'userId',
//     onDelete: 'SET NULL',
// });

// User.hasMany(Event, {
//     foreignKey: 'userId',
//     onDelete: 'CASCADE',
// })

// Comment.belongsTo(User, {
//     // foreignKey: 'userId',
//     // onDelete: 'SET NULL',
// });

// Event.belongsTo(User, {
//     foreignKey: 'userId',
// });

module.exports = { User, Comment, Event };