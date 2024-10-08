const mongoose = require('mongoose');
const Film = require('./Film');
const Nezo = require('./Nezo');

const foglalasSchema = new mongoose.Schema({
    film: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Film"
    },
    nezo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Nezo"
    }]
}, { timestamps: true });

const FoglalasModel = mongoose.model('reservation', foglalasSchema);

module.exports = FoglalasModel;