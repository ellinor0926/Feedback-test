const db = require('mongoose');
const User = require('./user');
const Conversation = require('./conversation');


const feedbackSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    inputType: { type: String, required: true },
    comment: { type: String, required: true },
    status: { type: String, required: true },
    itemNumber: { type: Number, required: true },
    sender: { type: db.Schema.Types.ObjectId, ref: 'User' },
    attachments: [ String ],
    supplier: { type: Number, required: true },
    productionWeek: { type: Number },
    date: { type: Date },
    conversation: [ { type: db.Schema.Types.ObjectId, ref: 'Conversation' } ],
});

module.exports = db.model('Feedback', feedbackSchema);