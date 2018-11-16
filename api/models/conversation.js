const db = require('mongoose');
const User = require('./user');

const conversationSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    sender: { type: db.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    date: { type: Date }
});

module.exports = db.model('Conversation', conversationSchema);