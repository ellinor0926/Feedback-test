const route = require('express').Router();
const users = require('../controllers/getUsersController');

// get all users
route.get('/', users.getUsers);

module.exports = route;