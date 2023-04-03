const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    id : {
        type:Number,
    },
    name: {
        type:String,
        required:true,
        unique:true
    },
    quantity: {
        type:Number,
        required:true,
    }
},
{
    timestamps:true
}
)


const Product = mongoose.model("Product",productSchema);

module.exports = Product;
