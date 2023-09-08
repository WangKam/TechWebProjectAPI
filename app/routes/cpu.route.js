const cpu_service = require('../services/cpu.service');

module.exports = function(app)
{
    /**
     * @api {GET} /cpu Get All
     * @apiVersion 1.0.0
     * @apiName getAll
     * @apiGroup CPU
     * @apiPermission Every type of user
     *
     * @apiDescription Get all cpu
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/cpu
     * @apiSuccess {String} name
     * @apiSuccess {String} brand
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "name":"i5-13500",
     *              .
     *          },
     *          "result": "get all cpu ok",
     *          "message" "get all cpu ok"
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
    app.get('/cpu',cpu_service.getAll);
    /**
     * @api {GET} /cpu/:name Get One
     * @apiVersion 1.0.0
     * @apiName getOne
     * @apiGroup CPU
     * @apiPermission Every type of user
     *
     * @apiDescription Get one cpu
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/cpu/:name
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "name":"i5-13500",
     *              ...
     *          },
     *          "result": "get 1 cpu ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "invalid name"
     *     }
     */
    app.get('/cpu/:name',cpu_service.getOne);
    /**
     * @api {POST} /cpu/:add Add One
     * @apiVersion 1.0.0
     * @apiName add
     * @apiGroup CPU
     * @apiPermission Every type of user
     *
     * @apiDescription Get one cpu
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/cpu/:add
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "name":"i5-13500",
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
    app.post('/cpu/:add',cpu_service.add);
    /**
     * @api {PUT} /cpu updateAll data
     * @apiVersion 1.0.0
     * @apiName updateAll
     * @apiGroup CPU
     * @apiPermission Every type of user
     *
     * @apiDescription update cpu
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/cpu
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "name":"i5-13500",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" "Updated all CPU"
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
    app.put('/cpu',cpu_service.updateAll);
    /**
     * @api {PUT} /cpu/:name Update One
     * @apiVersion 1.0.0
     * @apiName updateOne
     * @apiGroup CPU
     * @apiPermission Every type of user
     *
     * @apiDescription Update one cpu
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/cpu/:name
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "name":"i5-13500",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" "Update CPU OK"
     *     }
     *
     * @apiError invalid data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "update cpu fail"
     *     }
     */
    app.put('/cpu/:name',cpu_service.updateOne);
    /**
     * @api {DELETE} /cpu Delete All cpu
     * @apiVersion 1.0.0
     * @apiName deleteAll
     * @apiGroup CPU
     * @apiPermission Every type of user
     *
     * @apiDescription delete all cpu
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/cpu
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "name":"i5-13500",
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
    app.delete('/cpu',cpu_service.deleteAll);
    /**
     * @api {DELETE} /cpu/:name Delete One CPU
     * @apiVersion 1.0.0
     * @apiName deleteOne
     * @apiGroup CPU
     * @apiPermission Every type of user
     *
     * @apiDescription delete one cpu
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/cpu/:name
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "name":"i5-13500",
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
     *       "message": "fail to delete one cpu"
     *     }
     */
    app.delete('/cpu/:name',cpu_service.deleteOne);
}