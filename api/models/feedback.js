const db = require('mongoose');
const User = require('./user');
const Conversation = require('./conversation');


const feedbackSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    inputType: { type: String, required: true },
    interval: { type: String },
    handled: { type: String },
    comment: { type: String, required: true },
    status: { type: String, required: true },
    itemNumber: { type: Number, required: true },
    itemName: { type: String, required: true},
    productType: { type: String, required: true },
    hfbNumber: { type: Number, required: true },
    hfbName: { type: String, required: true },
    sender: { type: Object },
    attachments: [ String ],
    supplier: { type: Number, required: true },
    productionWeek: { type: Number },
    date: { type: Date },
    conversation: [ { type: db.Schema.Types.ObjectId, ref: 'Conversation' } ],
});

module.exports = db.model('Feedback', feedbackSchema);