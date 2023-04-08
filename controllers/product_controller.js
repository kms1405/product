
const product = require("../models/product")
const mongoose = require("mongoose");

// To create Product Entry
module.exports.create = function (req, res) {

    product.findOne({}).sort({ "createdAt": -1 }).then((findID) => {
        // Auto increment for id field
        req.body.product["id"] = findID ? findID.id + 1 : 1
        product.create(req.body.product).then((result) => {

            data = {
                product: {
                    name: result.name,
                    quantity: result.quantity
                }
            }
            res.status(200).send({ data: data });
        }).catch((error) => {
            if (error.code == 11000) {
                res.status(200).send({ message: "product name already exists", status: false })
            } else {
                res.status(200).send({ message: "Error while creating product", status: false })
            }

        }
        )
    })
}


// To get products
module.exports.getProduct = (req, res) => {
    product.find({}).select('id name quantity -_id').then((result) => {
        data = { data: { products: result } }
        res.status(200).send(data)
    })


}


// To delete products
module.exports.deleteProduct = (req, res) => {
    if (!req.body) {
        return res.status(200).send({ data: { message: "Please send product id" } })
    }
    product.deleteOne(req.params).then((result) => {
        if (result.deletedCount > 0) {
            return res.status(200).send({
                data: {
                    message: "product deleted"
                }
            })
        }


        return res.status(200).send({ data: { message: "product not found" } })

    })

}


// To Update products
module.exports.updateProduct = (req, res) => {

    filter = req.params
    update = { $inc: { "quantity": req.query.number } }

    product.findOneAndUpdate(filter, update).then((result) => {


    })

    product.findOne(filter).then((result) => {
        data = {
            product: {
                id: result.id,
                name: result.name,
                quantity: result.quantity
            }
        }
        res.status(200).send({ data: data })
    })



}