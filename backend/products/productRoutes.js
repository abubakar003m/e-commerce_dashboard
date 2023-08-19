const express = require('express');
const router = express.Router();
const ProductController = require('./ProductController');


router.post('/add-product', ProductController.addProduct);
router.get('/products', ProductController.getProducts);
router.get('/product/:id', ProductController.getProductById);
router.delete('/product/:id', ProductController.deleteProduct);
router.put('/product/:id', ProductController.updateProduct);
router.get('/search/:key', ProductController.searchProducts);

module.exports = router;
