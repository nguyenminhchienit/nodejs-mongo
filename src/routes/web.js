const express = require('express');
const UseController = require('../controllers/UserController')

const route = express.Router();

/**
 * 
 * @param {*} app -- express app
 */
const initWebRoute = (app) => {

    route.post('/register', UseController.handleRegister)
   
    app.use('/',route)
}

module.exports = initWebRoute;