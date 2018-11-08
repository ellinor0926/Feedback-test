const db = require('mongoose');
const Product = require('../models/product');

exports.createProduct = (req, res) => {

    let product = new Product({
        _id: new db.Types.ObjectId,
        itemNumber: req.body.itemNumber,
        itemName: req.body.itemName,
        productType: req.body.productType,
        hfbNumber: req.body.hfbNumber,
        hfbName: req.body.hfbName
    });

    product.save()
        .then(() => res.status(200).json({ message: `Product ${req.body.itemNumber} was successfully created` }))
        .catch(err => res.status(500).json({ message: 'An error has occured', error: err }));
};