const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const cpu = mySequel.define('cpu',
{
    name:
    {
        type: sequel.CHAR(45),
        allowNull: false,
        primaryKey: true,
    },
    full_name:
    {
        type: sequel.CHAR(45),
        allowNull: false,
        primaryKey: false,
    },
    brand:
    {
        type: sequel.CHAR(45),
        allowNull: false,
        primaryKey: false,
    },
    generation:
    {
        type: sequel.INTEGER,
        allowNull: false,
        primaryKey: false,
    },
    number_of_core:
    {
        type: sequel.INTEGER,
        allowNull: false,
        primaryKey: false,
    },
    number_of_thread:
    {
        type: sequel.INTEGER,
        allowNull: false,
        primaryKey: false,
    },
    max_frequency:
    {
        type: sequel.FLOAT,
        allowNull: false,
        primaryKey: false,
    },
    min_frequency:
    {
        type: sequel.FLOAT,
        allowNull: false,
        primaryKey: false,
    },
    socket:
    {
        type: sequel.CHAR(45),
        allowNull: true,
        primaryKey: false,
    },
    type_device:
    {
        type: sequel.CHAR(45),
        allowNull: false,
        primaryKey: false,
    },
}, {
    underscored: false,
    timestamps: false,
    updatedAt: false,
    createdAt: false,
    includeDeleted: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'cpu',
});

module.exports = cpu;
