const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FarmProduce = new Schema({
    farm_id: { type: Schema.Types.ObjectId, ref: "farm" },
    harvest: String,
    source: String,
    description: {
        type: String
    },
    produce_photo: {
        type: String
    },
    unit_of_measure: {
        type: String,
        default: "kg",
        enum: [
            "kg", "g", "t", "L","mL", "m^3","m","cm","mm","m^2","ha","unit"  
        ] 
    },
    price: {type: Number, default: 0.00},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('FarmProduce', FarmProduce);