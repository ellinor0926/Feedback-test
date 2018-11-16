const db = require('mongoose');


const producttypeSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    productType: { type: String, required: true },
});

module.exports = db.model('Producttype', producttypeSchema);