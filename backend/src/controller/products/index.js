const productController = require('./products.controller')

exports.getProducts = async (req, res) => {
    let item

    try {
        item = await productController.getProducts()
    } catch (error) {
        item = error
    }

    res.send(item)
}

exports.addProduct = async (req, res) => {
    let item

    try {
        item = await productController.addProduct(req.body)
    } catch (error) {
        item = error
    }

    res.send(item)
}


exports.deleteProduct = async (req, res) => {
    let item

    try {
        item = await productController.deleteProduct(req.params.id)
    } catch (error) {
        item = error
    }

    res.send(item)
}

exports.getById = async (req, res) => {
    let item

    try {
        item = await productController.getById(req.params.id)
    } catch (error) {
        item = error
    }

    res.send(item)
}

exports.updateProduct = async (req, res) => {
    let item

    try {
        item = await productController.updateProduct({ id: req.params.id, data: req.body })
    } catch (error) {
        item = error
    }

    res.send(item)
}
