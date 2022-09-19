const categoriesController = require('./categories.controller')

exports.getCategories = async (req, res) => {
    let item

    try {
        item = await productController.getCategories()
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

exports.addCategory = async (req, res) => {
    let item

    try {
        item = await productController.addCategory(req.body)
    } catch (error) {
        item = error
    }

    res.send(item)
}

exports.deleteCategory = async (req, res) => {
    let item

    try {
        item = await productController.deleteCategory(req.params.id)
    } catch (error) {
        item = error
    }

    res.send(item)
}


exports.updateCategory = async (req, res) => {
    let item

    try {
        item = await productController.updateCategory({ id: req.params.id, data: req.body })
    } catch (error) {
        item = error
    }

    res.send(item)
}