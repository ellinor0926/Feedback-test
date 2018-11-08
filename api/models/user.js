const db = require('mongoose');

const userSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    role: { type: String, required: true },
    imgSrc: { type: String }
});

module.exports = db.model('User', userSchema);