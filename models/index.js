const User = require('./User');
const Comment = require('./Comment');
const Event = require('./Event');

Event.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'SET NULL',
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'SET NULL',
});

module.exports = { User, Comment, Event };