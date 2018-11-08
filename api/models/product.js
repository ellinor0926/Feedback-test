const db = require('mongoose');
const Feedback = require('./feedback');

const productSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    itemNumber: { type: Number, required: true },
    itemName: { type: String, required: true },
    productType: { type: String, required: true },
    hfbNumber: { type: Number, required: true },
    hfbName: { type: String, required: true },
    feedback: [{ type: db.Schema.Types.ObjectId, ref: 'Feedback'}]
});

module.exports = db.model('Product', productSchema);