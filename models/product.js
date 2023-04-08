const mongoose = require("mongoose");

// User model
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true,
    }
},
    {
        timestamps: true
    }
)


const Product = mongoose.model("Product", productSchema);

// exporting Product model
module.exports = Product;
