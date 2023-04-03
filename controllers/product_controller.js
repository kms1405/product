
const product = require("../models/product")
const mongoose = require("mongoose");


module.exports.create = function (req, res) {

    product.findOne({}).sort({ "createdAt": -1 }).then((findID) => {
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

module.exports.getProduct = (req, res) => {
    query = req.params? req.params : {}
    product.find(query).select('id name quantity -_id').then((result) => {
        res.status(200).send(JSON.stringify(result))
    })

    
}


module.exports.deleteProduct = (req, res) => {
    if (!req.body) {
        return res.status(200).send({data:{message:"Please send product id"}})
    }
    product.deleteOne(req.params).then((result) => {
        if (result.deletedCount > 0){
            return res.status(200).send({data: {
                message: "product deleted"
              }})
        }


        return res.status(200).send({data:{message:"product not found"}}) 
        
    })

}



module.exports.updateProduct = (req,res) =>{

    filter = req.params
    update={ $inc: { "quantity": req.query.number }}

    product.findOneAndUpdate(filter,update).then((result)=>{
        console.log(result)
        data = {
            product: {
                id:result.id,
                name: result.name,
                quantity: result.quantity
            }
        }
        res.status(200).send({data:data})
    })

    
}