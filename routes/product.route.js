const express = require('express');
const router = express.Router();
const {getProducts , getSingleProducts, createProducts, updateProduct, deleteProduct} = require('../controllers/product.controller.js')

router.get('/', getProducts)
router.get('/:id', getSingleProducts)
router.post('/', createProducts)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router;
