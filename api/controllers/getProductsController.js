const Product = require('../models/product');

exports.getProducts = (req, res) => {
    Product.find()
        .exec()
        .then(products => {
            let result = products.map(product => {
                return {
                    _id: product._id,
                    itemNumber: product.itemNumber,
                    itemName: product.itemName,
                    productType: product.productType,
                    hfbNumber: product.hfbNumber,
                    // sender: f.sender,
                    hfbName: product.hfbName,
                    feedback: product.feedback
                }
            });
            res.status(200).json(result);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};