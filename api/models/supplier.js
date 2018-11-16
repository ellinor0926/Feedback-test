const db = require('mongoose');


const supplierSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    supplier: { type: String, required: true },
});

module.exports = db.model('Supplier', supplierSchema);