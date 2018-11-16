const Hfb = require('../models/hfb');
const ProductType = require('../models/productType');
const Supplier = require('../models/supplier');

// TODO: return 1 array with hfbs, suppliers and product types
exports.getFilters = (req, res) => {

    Hfb.find()
        .exec()
        .then(h => {

            res.status(200).json(feedback);
        })
        .catch(error => {
            res.status(500).json({error: error})
        })
}
