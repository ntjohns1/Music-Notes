const User = require('./User');
const Comment = require('./Comment');
const Event = require('./Event');

User.hasMany(Comment, {
    sourceKey: 'id',
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

User.hasMany(Event, {
    sourceKey: 'id',
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Event.belongsTo(User, {
    targetKey: 'id',
    foreignKey: 'userId'
});

Comment.belongsTo(User, {
    targetKey: 'id',
    foreignKey: 'userId'
});

module.exports = { User, Comment, Event };