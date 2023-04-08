// imports
const express = require('express');
const router = express.Router();
const productControler = require("../controllers/product_controller")

// url redirection for various request methods
router.post('/create', productControler.create );
router.get('/', productControler.getProduct );
router.delete('/:id', productControler.deleteProduct );
router.post('/:id/update_quantity',productControler.updateProduct)

// export router
module.exports = router;