const db = require('mongoose');
const Feedback = require('../models/feedback');
const Product = require('../models/product');

exports.sendFeedback = (req, res) => {

    let feedback = new Feedback({
        _id: new db.Types.ObjectId,
        inputType: req.body.inputType,
        comment: req.body.comment,
        status: "new",
        itemNumber: req.body.itemNumber,
        sender: req.body.sender,
        attachments: req.body.attachments,
        supplier: req.body.supplier,
        productionWeek: req.body.productionWeek,
        date: Date.now(),

    });

    feedback.save()
        .then(() => {
            Product.findOne({ itemNumber: req.body.itemNumber })
                .then((product) => {
                    product.feedback.push(feedback);
                    product.save()
                        .then(() => res.status(200).json({ message: `Thank you for your feedback` }))
                        .catch(err => res.status(500).json({ message: 'An error has occured', error: err }));
                })
        })
};
