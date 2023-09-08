const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const laptop = mySequel.define('laptop',
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
    cpu:
    {
        type: sequel.CHAR(45),
        allowNull: false,
        primaryKey: false,
    },
    gpu:
    {
        type: sequel.CHAR(45),
        allowNull: false,
        primaryKey: false,
    },
    year:
    {
        type: sequel.INTEGER,
        allowNull: false,
        primaryKey: false,
    },
    color:
    {
        type: sequel.CHAR(45),
        allowNull: false,
        primaryKey: false,
    }
},
{
    underscored: false,
    timestamps: false,
    updatedAt: false,
    createdAt: false,
    includeDeleted: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'laptop',
});

module.exports = laptop;
