const mongoose = require('mongoose');
const { Schema } = mongoose;

const keySchema = new Schema({
    key: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Keys = mongoose.model('Keys', keySchema);

module.exports = Keys;