module.exports = (app) => {
    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    const { productController } = require('../controller/index')

    // Routes
    app.get('/allproducts', productController.getProducts)

    app.get('/product/:id', productController.getById)

    app.post('/addproduct', productController.addProduct)

    app.delete('/deleteproduct/:id', productController.deleteProduct)

    app.put('/updateproduct/:id', productController.updateProduct)
}
