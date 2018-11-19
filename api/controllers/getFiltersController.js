const Hfb = require('../models/hfb');
const ProductType = require('../models/productType');
const Supplier = require('../models/supplier');
const Product = require('../models/product');

// TODO: return 1 array with hfbs, suppliers and product types
exports.getFilters = (req, res) => {

    let id = 0;

    Hfb.find()
        .exec()
        .then(hfbs => {
            let hfbNames = hfbs.map(hfb => {
                let name = {
                    id: id,
                    title: hfb.hfbName,
                    key: 'hfbName'
                }
                id++;
                return name;
            })
            ProductType.find()
            .exec()
            .then(productTypes => {
                let types = productTypes.map(type => {
                    let t = {
                        id: id,
                        title: type.productType,
                        key: 'productType'
                    }
                    id++;
                    return t;
                })
                Supplier.find()
                .exec()
                .then(suppliers => {
                    suppliers = suppliers.map(supplier => {
                        let s = {
                            id: id,
                            title: supplier.supplierNumber,
                            key: 'supplierNumber'
                        }
                        id++;
                        return s;
                    })
                    Product.find()
                    .exec()
                    .then(products => {
                        let itemNumbers = products.map(product => {
                            let number = {
                                id: id,
                                title: product.itemNumber + '',
                                key: 'itemNumber'
                            }
                            id++;
                            return number;
                        });
                        let itemNames = products.map(product => {
                            let name =  {
                                id: id,
                                title: product.itemName,
                                key: 'itemName'
                            }
                            id++;
                            return name;
                        })
                    let filters = [...hfbNames, ...types, ...suppliers, ...itemNumbers, ...itemNames];
                    res.status(200).json(filters);
                    })
                })
            })
        })
        
        .catch(error => {
            res.status(500).json({error: error})
        })
}
