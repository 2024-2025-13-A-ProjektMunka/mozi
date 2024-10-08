const mongoose = require('mongoose');
const Film = require('./Film');

const nezoSchema = new mongoose.Schema({
    nev: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    film: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Film"
    }]
}, { timestamps: true });

const NezoModel = mongoose.model('viewer', nezoSchema);

module.exports = NezoModel;