const route = require('express').Router();
const products = require('../controllers/getProductsController');

// Create new User
route.get('/', products.getProducts);

module.exports = route;