const route = require('express').Router();
const users = require('../controllers/getUserByIdController');

// get user by id in parameters
route.get('/:id', users.getUser);

module.exports = route;