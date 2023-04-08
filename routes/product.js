const express = require('express');
const router = express.Router();
const productControler = require("../controllers/product_controller")

router.post('/create', productControler.create );
router.get('/', productControler.getProduct );
router.delete('/:id', productControler.deleteProduct );
router.post('/:id/update_quantity',productControler.updateProduct)

module.exports = router;