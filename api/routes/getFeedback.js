const route = require('express').Router();
const feedback = require('../controllers/getFeedbackController');

// Create new User
route.get('/', feedback.getFeedback);

module.exports = route;