module.exports = (app) => {
    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    const { categoriesController } = require('../controller/index')

    // Routes
    app.get('/allcategories', categoriesController.getCategories)

    app.get('/category/:id', categoriesController.getById)

    app.post('/addcategory', categoriesController.addCategory)

    app.delete('/deletecategory/:id', categoriesController.deleteCategory)

    app.put('/updatecategory/:id', categoriesController.updateCategory)
}
