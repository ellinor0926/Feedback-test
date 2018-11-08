const route = require('express').Router();
const products = require('../controllers/createProductController');

// Create new User
route.post('/', products.createProduct);

module.exports = route;