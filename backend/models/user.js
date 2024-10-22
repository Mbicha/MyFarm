const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const User = new Schema({
    first_name: {type: String},
    last_name: {type: String},
    email: {
        type: String,
        index: {
            unique: true,
            sparse: true
        }
    },
    password: {type: String},
    confirm_password: {type: String},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
})

User.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 10);

    this.confirm_password = undefined;

    next();
});

User.methods.correctPassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}

module.exports = mongoose.model("user", User);
