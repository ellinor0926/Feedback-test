const db = require('mongoose');
const Feedback = require('../models/feedback');
const Product = require('../models/product');
const User = require('../models/user');

// exports.sendFeedback = (req, res) => {

//     Product.findOne({ itemNumber: req.body.itemNumber})
//     .then(product => {
//         let feedback = new Feedback({
//             _id: new db.Types.ObjectId,
//             inputType: req.body.inputType,
//             interval: req.body.interval,
//             handled: req.body.handled,
//             comment: req.body.comment,
//             status: "new",
//             itemNumber: req.body.itemNumber,
//             sender: req.body.sender,
//             attachments: req.body.attachments,
//             supplier: req.body.supplier,
//             productionWeek: req.body.productionWeek,
//             date: Date.now(),
//             itemName: product.itemName,
//             productType: product.productType,
//             hfbNumber: product.hfbNumber,
//             hfbName: product.hfbName,
    
//         });
//         product.feedback.push(feedback);
//         feedback.save()
//         .then(() => {                 
//             product.save()
//                 .then(() => res.status(200).json({ message: `Thank you for your feedback` }))
//                 .catch(err => res.status(500).json({ message: 'An error has occured', error: err }));
    
//         })

//     })
    
// };

exports.sendFeedback = (req, res) => {

    User.findOne({ _id: req.body.sender })
    .then(user => {
        Product.findOne({ itemNumber: req.body.itemNumber})
            .then(product => {
            let feedback = new Feedback({
                _id: new db.Types.ObjectId,
                inputType: req.body.inputType,
                interval: req.body.interval,
                handled: req.body.handled,
                comment: req.body.comment,
                status: "new",
                itemNumber: req.body.itemNumber,
                sender: user,
                attachments: req.body.attachments,
                supplier: req.body.supplier,
                productionWeek: req.body.productionWeek,
                date: Date.now(),
                itemName: product.itemName,
                productType: product.productType,
                hfbNumber: product.hfbNumber,
                hfbName: product.hfbName,
        
            });
            product.feedback.push(feedback);
            feedback.save()
            .then(() => {                 
                product.save()
                    .then(() => res.status(200).json({ message: `Thank you for your feedback` }))
                    .catch(err => res.status(500).json({ message: 'An error has occured', error: err }));
        
            })

        })
    })
    
    
};
