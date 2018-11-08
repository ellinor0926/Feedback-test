const route = require('express').Router();
const feedback = require('../controllers/sendFeedbackController');

// Create new User
route.post('/', feedback.sendFeedback);

module.exports = route;