const route = require('express').Router();
const feedback = require('../controllers/getFilteredFeedbackController');

route.post('/', feedback.getFilteredFeedback);

module.exports = route;