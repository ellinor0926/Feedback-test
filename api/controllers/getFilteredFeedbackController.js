const Feedback = require('../models/feedback');

exports.getFilteredFeedback = (req, res) => {
    Feedback.find(req.body)
        .exec()
        .then(feedback => {
            res.status(200).json(feedback);
        })
        .catch(error => {
            res.status(500).json({error: error})
        })
}
