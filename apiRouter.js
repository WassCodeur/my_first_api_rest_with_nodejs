//imports

let express = require('express');
let userCtrler = require('./routes/userCtrler');

//router

exports.router = (function() {
let apiRouter = express.Router();
    //user router
    apiRouter.route('/users/register/').post(userCtrler.register)
    apiRouter.route('/users/login/').post(userCtrler.login)

    return apiRouter
})();
 