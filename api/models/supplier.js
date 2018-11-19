const db = require('mongoose');


const supplierSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    supplierNumber: { type: String, required: true },
});

module.exports = db.model('Supplier', supplierSchema);