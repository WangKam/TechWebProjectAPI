const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const account = mySequel.define('account', {
    id: {
        type: sequel.BIGINT(20),
        autoIncrement: true,
        allowNull: false,
    },
    login_name: {
        type: sequel.STRING(64),
        allowNull: false,
        primaryKey: true,
    },
    password: {
        type: sequel.STRING(128),
        allowNull: false,
    },
    full_name: {
        type: sequel.STRING(128),
        allowNull: true,
    },
    created_by: {
        type: sequel.BIGINT(20),
        allowNull: false,
        references: {
            model: this.account,
            key: 'id',
        },
    },
    updated_by: {
        type: sequel.BIGINT(20),
        allowNull: false,
        references: {
            model: this.account,
            key: 'id',
        },
    },
    created_at: {
        type: sequel.DATE,
        allowNull: true,
        defaultValue: sequel.NOW
    },
    updated_at: {
        type: sequel.DATE,
        allowNull: true,
        defaultValue: sequel.NOW
    },
}, {
    underscored: false,
    timestamps: false,
    updatedAt: false,
    createdAt: false,
    includeDeleted: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'account',
});

module.exports = account;
