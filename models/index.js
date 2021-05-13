const User = require('./User');
const Comment = require('./Comment');
const Event = require('./Event');

User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

User.hasMany(Event, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
})

Comment.belongsTo(User, {
    foreignKey: 'userId',
});

Event.belongsTo(User, {
    foreignKey: 'userId',
})

module.exports = { User, Comment, Event };