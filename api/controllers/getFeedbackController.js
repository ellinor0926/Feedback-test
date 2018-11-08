const Feedback = require('../models/feedback');
const {getUser} = require('./getUserByIdController');

exports.getFeedback = (req, res) => {
    Feedback.find()
        .exec()
        .then(feedback => {
            let result = feedback.map(f => {
                
                return {
                    _id: f._id,
                    inputType: f.inputType,
                    comment: f.comment,
                    status: f.status,
                    itemNumber: f.itemNumber,
                    sender: f.sender,
                    attachments: f.attachments,
                    supplier: f.supplier,
                    productionWeek: f.productionWeek,
                    date: f.date,
                    conversation: f.conversation
                }
            });
            res.status(200).json(result);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};