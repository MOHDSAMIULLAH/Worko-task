const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    isDeleted: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
