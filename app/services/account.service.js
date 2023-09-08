/**
 * Created by bioz on 1/13/2017.
 */
// third party components

// our components
const account = require('../models/account.model');
const rest = require('../utils/restware.util');
const config = require('../configs/general.config');

const bCrypt = require('bcryptjs');
const jsonWebToken = require('jsonwebtoken');

module.exports = {
    register: function(req, res) {
        const out = { title: 'account', action: 'register'};
        return rest.sendSuccessOne(res, out, 200);
    },

    create: function(req, res) {
        const out = { title: 'account', action: 'create'};
        return rest.sendSuccessOne(res, out, 200);
    },

    getOne: function(req, res) {
        const login_name = req.params.login_name || '';
        try {
            const attributes = ['id', 'login_name', 'full_name', 'created_at', 'updated_at', 'created_by', 'updated_by'];

            const where = {login_name: login_name};

            account.findOne({
                where: where,
                attributes: attributes,
                raw: true,
            }).then((result)=>{
                'use strict';
                if (result) {
                    return rest.sendSuccessOne(res, result, 200);
                } else {
                    return rest.sendError(res, 1, 'unavailable_account', 400);
                }
            });
        } catch (error) {
            return rest.sendError(res, 400, 'get_account_fail', 400, error);
        }
    },

    getAll: function(req, res) {
        const query = req.query || '';
        try {
            const where = {};
            let page = 1;
            let perPage = 10;
            const sort = [];
            const offset = perPage * (page - 1);

            account.findAndCountAll({
                where: where,
                limit: perPage,
                offset: offset,
                order: sort,
                raw: true,
            })
                .then((data) => {
                    const pages = Math.ceil(data.count / perPage);
                    const output = {
                        data: data.rows,
                        pages: {
                            current: page,
                            prev: page - 1,
                            hasPrev: false,
                            next: (page + 1) > pages ? 0 : (page + 1),
                            hasNext: false,
                            total: pages,
                        },
                        items: {
                            begin: ((page * perPage) - perPage) + 1,
                            end: page * perPage,
                            total: data.count,
                        },
                    };
                    output.pages.hasNext = (output.pages.next !== 0);
                    output.pages.hasPrev = (output.pages.prev !== 0);
                    return rest.sendSuccessMany(res, output, 200);
                }).catch(function(error) {
                return rest.sendError(res, 1, 'get_list_account_fail', 400, error);
            });
        } catch (error) {
            return rest.sendError(res, 1, 'get_list_account_fail', 400, error);
        }
    },

    update: function(req, res) {
        const out = { title: 'account', action: 'update'};
        return rest.sendSuccessOne(res, out, 200);
    },

    updates: function(req, res) {
        const out = { title: 'account', action: 'updates'};
        return rest.sendSuccessOne(res, out, 200);
    },

    delete: function(req, res) {
        const out = { title: 'account', action: 'delete'};
        return rest.sendSuccessOne(res, out, 200);
    },

    deletes: function(req, res) {
        const out = { title: 'account', action: 'deletes'};
        return rest.sendSuccessOne(res, out, 200);
    },

    login: function(req, res) {
        const login_name = req.body.login_name || '';
        const password = req.body.password || '';

        const where = {login_name: login_name};
        const attributes = ['id', 'login_name', 'password', 'full_name'];
        account.findOne( {
            where: where,
            attributes: attributes}).then( (account)=>{
            'use strict';
            if (account) {
                bCrypt.compare( password, account.password, function(error, result) {
                    if (result === true) {
                        const payload = {
                            id: account.id,
                            login_name: account.login_name,
                            full_name: account.full_name
                        };
                        jsonWebToken.sign(
                            payload,
                            config.jwtAuthKey,
                            {expiresIn: config.tokenLoginExpiredDays},
                            function(error, token) {
                                if (error) {
                                    return rest.sendError(res, 4000, 'create_token_fail', 400, error);
                                } else {
                                    return rest.sendSuccessToken(res, token, payload);
                                }
                            },
                        );
                    } else {
                        return rest.sendError(res, 401, 'wrong_password', 401, null);
                    }
                });
            } else {
                return rest.sendError(res, 401, 'account_unavailable', 401, null);
            }
        }).catch(function(error) {
            'use strict';
            return rest.sendError(res, 401, 'login_fail', 401, error);
        });
    },
};
