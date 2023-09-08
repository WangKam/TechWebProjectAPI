const laptop_service = require('../services/laptop.service');

module.exports = function(app)
{
    /**
     * @api {GET} /laptop Get All
     * @apiVersion 1.0.0
     * @apiName getAll
     * @apiGroup laptop
     * @apiPermission Every type of user
     *
     * @apiDescription Get all laptop
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/laptop
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "name":"Legion Slim 7",
     *              .
     *          },
     *          "result": "get all laptop ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "can't get data from server"
     *     }
     */
    app.get('/laptop',laptop_service.getAll);
    /**
     * @api {GET} /laptop/:name Get One
     * @apiVersion 1.0.0
     * @apiName getOne
     * @apiGroup LAPTOP
     * @apiPermission Every type of user
     *
     * @apiDescription Get one laptop
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/laptop/legion-slim-7
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "name":"legion-slim-7",
     *              .
     *          },
     *          "result": "get one laptop ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "can't get data from server"
     *     }
     */
    app.get('/laptop/:name',laptop_service.getOne);
    /**
     * @api {POST} /laptop/:add Add One
     * @apiVersion 1.0.0
     * @apiName add
     * @apiGroup laptop
     * @apiPermission Every type of user
     *
     * @apiDescription Get one laptop
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/laptop/:add
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "name":"Legion Slim 7",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" "Send Data Success"
     *     }
     *
     * @apiError invalid data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "send data fail"
     *     }
     */
    app.post('/laptop',laptop_service.add);
    /**
     * @api {PUT} /laptop updateAll data
     * @apiVersion 1.0.0
     * @apiName updateAll
     * @apiGroup laptop
     * @apiPermission Every type of user
     *
     * @apiDescription update laptop
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/laptop
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "name":"Legion Slim 7",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" "Updated all laptop"
     *     }
     *
     * @apiError invalid data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "can't update by PUT request"
     *     }
     */
    app.put('/laptop',laptop_service.updateAll);
    /**
     * @api {PUT} /laptop/:name Update One
     * @apiVersion 1.0.0
     * @apiName updateOne
     * @apiGroup laptop
     * @apiPermission Every type of user
     *
     * @apiDescription Update one laptop
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/laptop/:name
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "name":"Legion Slim 7",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" "Update laptop OK"
     *     }
     *
     * @apiError invalid data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "update laptop fail"
     *     }
     */
    app.put('/laptop/:name',laptop_service.updateOne);
    /**
     * @api {DELETE} /laptop Delete All laptop
     * @apiVersion 1.0.0
     * @apiName deleteAll
     * @apiGroup laptop
     * @apiPermission Every type of user
     *
     * @apiDescription delete all laptop
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/laptop
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "name":"Legion Slim 7",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "fail to delete all"
     *     }
     */
    app.delete('/laptop',laptop_service.deleteAll);
    /**
     * @api {DELETE} /laptop/:name Delete One laptop
     * @apiVersion 1.0.0
     * @apiName deleteOne
     * @apiGroup laptop
     * @apiPermission Every type of user
     *
     * @apiDescription delete one laptop
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/laptop/:name
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "name":"Legion Slim 7",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "fail to delete one laptop"
     *     }
     */
    app.delete('/laptop/:name',laptop_service.deleteOne);
}