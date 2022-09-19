let router = require('express').Router();
const { productController } = require('../controller/index')

router.get('/allproducts', productController.getProducts)

router.get('/product/:id', productController.getById)

router.post('/addproduct', productController.addProduct)

router.delete('/deleteproduct/:id', productController.deleteProduct)

router.put('/updateproduct/:id', productController.updateProduct)

module.exports = router;