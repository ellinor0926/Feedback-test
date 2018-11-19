const route = require('express').Router();
const filters = require('../controllers/getFiltersController');

// Create new User
route.get('/', filters.getFilters);

module.exports = route;