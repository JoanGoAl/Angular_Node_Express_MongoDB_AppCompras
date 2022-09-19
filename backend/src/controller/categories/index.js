const categoriesController = require('./categories.controller')

exports.getCategories = async (req, res) => {
    let item

    try {
        item = await categoriesController.getCategories()
    } catch (error) {
        item = error
    }

    res.send(item)
}

exports.getById = async (req, res) => {
    let item

    try {
        item = await categoriesController.getById(req.params.id)
    } catch (error) {
        item = error
    }

    res.send(item)
}

exports.addCategory = async (req, res) => {
    let item

    console.log(req);

    try {
        item = await categoriesController.addCategory(req.body)
    } catch (error) {
        item = error
    }

    res.send(item)
}

exports.deleteCategory = async (req, res) => {
    let item

    try {
        item = await categoriesController.deleteCategory(req.params.id)
    } catch (error) {
        item = error
    }

    res.send(item)
}


exports.updateCategory = async (req, res) => {
    let item

    try {
        item = await categoriesController.updateCategory({ id: req.params.id, data: req.body })
    } catch (error) {
        item = error
    }

    res.send(item)
}