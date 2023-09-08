const laptop = require('../models/laptop.model');
const rest = require('../utils/restware.util');

module.exports =
{
    add: function(req, res) {
        try {
            const query = {};
            query.name = req.body.name;
            query.full_name = req.body.full_name;
            query.brand = req.body.brand;
            query.cpu = req.body.cpu;
            query.gpu = req.body.gpu;
            query.year = req.body.year;
            query.color = req.body.color;
            laptop.create(query).then((result)=>{
                'use strict';
                return rest.sendSuccessOne(res, result, 200);
            }).catch(function(error) {
                'use strict';
                console.log(error);
                return rest.sendError(res, 1, 'add_laptop_fail', 400, error);
            });
        } catch (error) {
            console.log(error);
            return rest.sendError(res, 1, 'add_laptop_fail', 400, error);
        }
    },
    getAll: function(req, res) {
        const query = req.query || '';
        try {
            const where = {};
            let page = 1;
            let perPage = 5;
            const sort = [];
            const offset = perPage * (page - 1);

            laptop.findAndCountAll({
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
                return rest.sendError(res, 1, 'get_list_laptop', 400, error);
            });
        } catch (error) {
            return rest.sendError(res, 1, 'get_list_laptop_fail', 400, error);
        }
    },
    
    getOne: function(req, res)
    {
        console.log('get One laptop');
        const name = req.params.name || '';
        try
        {
            const attributes = ['name','full_name','brand','cpu','gpu','year','color'];
            
            const where = {name: name};

            laptop.findOne
            (
                {
                    where: where,
                    attributes: attributes,
                    raw: true,
                }
            ).then((result)=>{
                'use strict';
                if(result)
                {
                    return rest.sendSuccessOne(res,result,200);
                }
                else
                {
                    return rest.sendError(res, 1, 'Invalid', 400);
                }
            }
            )
        }
        catch (err)
        {
            console.log(error);
            return rest.sendError(res,400,'get One fail',400,err);
        }
    },

    updateAll: function(req, res)
    {

    },
    updateOne: function(req, res) {
        try {
            const query = {};
            query.updated_by = req.body.accessAccountId;
            
            if (req.body.full_name) {
                query.full_name = req.body.full_name;
            }
            if (req.body.brand) {
                query.brand = req.body.brand;
            }
            if (req.body.cpu) {
                query.cpu = req.body.cpu;
            }
            if (req.body.gpu) {
                query.gpu = req.body.gpu;
            }
            if (req.body.year) {
                query.year = req.body.year;
            }
            const where = {name: req.params.name};

            laptop.update(
                query,
                {where: where,
                    returning: true,
                    plain: true}).then((result)=>{
                'use strict';
                if ( (result) && (result.length === 2) ) {
                    return rest.sendSuccessOne(res, {name: req.params.name}, 200);
                } else {
                    return rest.sendError(res, 1, 'update_laptop_fail', 400, null);
                }
            }).catch(function(error) {
                'use strict';
                console.log(error);
                return rest.sendError(res, 1, 'update_laptop_fail', 400, error);
            });
        } catch (error) {
            console.log(error);
            return rest.sendError(res, 1, 'update_laptop_fail', 400, error);
        }
    },
    deleteAll: function(req, res)
    {

    },
    deleteOne: function(req, res) {
        try {
            const where = {name: req.params.name};

            laptop.destroy(
                {where: where}).then((result)=>{
                'use strict';
                if (result >= 1) {
                    return rest.sendSuccessOne(res, {name: req.params.name}, 200);
                } else {
                    return rest.sendError(res, 1, 'delete_laptop_fail', 400, null);
                }
            }).catch(function(error) {
                'use strict';
                return rest.sendError(res, 1, 'delete_laptop_fail', 400, error);
            });
        } catch (error) {
            return rest.sendError(res, 1, 'delete_laptop_fail', 400, error);
        }
    }
}