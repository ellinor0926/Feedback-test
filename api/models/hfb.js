const db = require('mongoose');


const hfbSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    hfbName: { type: String, required: true },
    hfbNumber: { type: String, required: true}
});

module.exports = db.model('Hfb', hfbSchema);