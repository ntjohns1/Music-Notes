const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false, 
        },
        month: {
            type: DataTypes.INTEGER,
            allowNull: false, 
        },
        day: {
            type: DataTypes.INTEGER,
            allowNull: false, 
        },
        hour: {
            type: DataTypes.INTEGER,
            allowNull: false, 
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        calendar_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'event'
    }
);

module.exports = Event;