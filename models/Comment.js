const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false, 
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
<<<<<<< HEAD
            },
        },
        // event_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        //     references: {
        //         model: 'event',
        //         key: 'id',
        //     },
        // },
=======
            }
        }
>>>>>>> 2cd7cc7ff3b8713e31350ec5983c354937d35027
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;