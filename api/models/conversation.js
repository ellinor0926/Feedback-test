const db = require('mongoose');

const conversationSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    by: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date }
});

module.exports = db.model('Conversation', conversationSchema);