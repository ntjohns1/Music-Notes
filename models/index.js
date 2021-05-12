const User = require('./User');
const Comment = require('./Comment');

User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
});

module.exports = { User, Comment };