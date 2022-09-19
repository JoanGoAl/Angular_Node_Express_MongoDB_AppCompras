let router = require('express').Router();
const { categoriesController } = require('../controller/index')

router.get('/allcategories', categoriesController.getCategories)

router.get('/category/:id', categoriesController.getById)

router.post('/addcategory', categoriesController.addCategory)

router.delete('/deletecategory/:id', categoriesController.deleteCategory)

router.put('/updatecategory/:id', categoriesController.updateCategory)

module.exports = router;