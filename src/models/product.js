const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: { type: String, required : true },
    description: { type: String, required : true },
    status: {type: Boolean, required: true, default: 1}
}, {timestamps: true})

module.exports = mongoose.model("Product", productSchema);