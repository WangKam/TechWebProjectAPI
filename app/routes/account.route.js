const accountService = require('../services/account.service');

module.exports = function (app)
{
    /**
     * @api {GET} /accounts Get All
     * @apiVersion 1.0.0
     * @apiName getAll
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Get all account
     *
     * @apiParam {string} id ID of account, on params
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/accounts/guest
     *
     * @apiSuccess {String} id the ID of account
     * @apiSuccess {String} title title of account
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":
     *          {
     *              "id": "3",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "invalid input"
     *     }
     */
    app.get('/accounts', accountService.getAll);
    /**
     * @api {GET} /accounts/:login_name Get One
     * @apiVersion 1.0.0
     * @apiName getOne
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Get one account
     *
     * @apiParam {string} id ID of account, on params
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/accounts/3
     *
     * @apiSuccess {String} id the ID of account
     * @apiSuccess {String} title title of account
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "id": "2",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "invalid input"
     *     }
     */
    app.get('/accounts/:login_name', accountService.getOne);
    /**
     * @api {POST} /accounts/login Post One
     * @apiVersion 0.4.0
     * @apiName postOne
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Get one account
     *
     * @apiParam {string} id ID of account, on params
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3000/api/v1/accounts/2
     *
     * @apiSuccess {String} id the ID of account
     * @apiSuccess {String} title title of account
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "id": "2",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "invalid input"
     *     }
     */
    app.post('/accounts/login', accountService.login);
    /**
     * @api {POST} /accounts/register Post Register One
     * @apiVersion 0.4.0
     * @apiName postregisterOne
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Register an account
     *
     * @apiParam {string} id ID of account, on params
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/accounts
     *
     * @apiSuccess {String} id the ID of account
     * @apiSuccess {String} title title of account
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "id": "2",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "invalid input"
     *     }
     */
    app.post('/accounts/register', accountService.register);
    /**
     * @api {POST} /accounts Create One
     * @apiVersion 1.0.0
     * @apiName createOne
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Create one account
     *
     * @apiBody {String} login_name the unique name of user for login
     * @apiBody {String} full_name the name of user.
     * @apiBody {String} password password of user
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/accounts
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "id": "2",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "invalid input"
     *     }
     */
    app.post('/accounts', accountService.create);
    /**
     * @api {PUT} /api/v1/accounts/:id Update One
     * @apiVersion 0.4.0
     * @apiName createOne
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Create one account
     *
     * @apiBody {String} login_name the unique name of user for login
     * @apiBody {String} full_name the name of user.
     * @apiBody {String} password password of user
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3000/api/v1/accounts
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "id": "2",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "invalid input"
     *     }
     */
    app.put('/accounts/:login_name', accountService.update);
    /**
     * @api {PUT} /api/v1/accounts Update All
     * @apiVersion 0.4.0
     * @apiName createOne
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Create one account
     *
     * @apiBody {String} login_name the unique name of user for login
     * @apiBody {String} full_name the name of user.
     * @apiBody {String} password password of user
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3000/api/v1/accounts
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "id": "2",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "invalid input"
     *     }
     */
    app.put('/accounts', accountService.updates);
    /**
     * @api {PUT} /api/v1/accounts delete One
     * @apiVersion 0.4.0
     * @apiName deleteOneAccounts
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Deletes one account
     *
     * @apiBody {String} login_name the unique name of user for login
     * @apiBody {String} full_name the name of user.
     * @apiBody {String} password password of user
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3000/api/v1/accounts
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "id": "2",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "invalid input"
     *     }
     */
    app.delete('/accounts/:login_name', accountService.delete);
    /**
     * @api {PUT} /accounts delete All
     * @apiVersion 0.4.0
     * @apiName deleteAllAccounts
     * @apiGroup Accounts
     * @apiPermission Every type of user
     *
     * @apiDescription Deletes all account
     *
     * @apiBody {String} login_name the unique name of user for login
     * @apiBody {String} full_name the name of user.
     * @apiBody {String} password password of user
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3333/api/v1/accounts
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "data":{
     *              "id": "2",
     *              ...
     *          },
     *          "result": "ok",
     *          "message" ""
     *     }
     *
     * @apiError invalid input data
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "result": "fail",
     *       "message": "invalid input"
     *     }
     */
    app.delete('/accounts', accountService.deletes);
};
