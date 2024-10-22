const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Farm = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "user"},
    farm_name: {
        type: String,
        require: true
    },
    farming_category: {
        type: String,
        default: "Plant Farming",
        enum: ["Plant Farming", "Animal Farming"]
    },
    specific_farming_type: {
        type: String,
        default: "Cereal Farming",
        enum: [
            "Cereal Farming","Legume Farming", "Tuber Farming", "Vegetable Farming",
            "Fruit Farming", "Herb Farming", "Horticulture", "Cattle Farming", "Poultry Farming,",
            "Pig Farming", "Sheep Farming", "Goat Farming","Fish Farming", "Apiculture",
            "Beef Farming"
          ]
    },
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model("farm", Farm);
