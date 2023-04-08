// imports
const express = require('express');
const router = express.Router();

// redirect to products
router.use('/products', require('./product'));



module.exports = router;