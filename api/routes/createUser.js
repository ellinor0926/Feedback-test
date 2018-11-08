const route = require('express').Router();
const users = require('../controllers/createUserController');

// Create new User
route.post('/', users.createUser);

module.exports = route;