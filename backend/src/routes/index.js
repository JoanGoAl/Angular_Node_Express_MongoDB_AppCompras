let router = require('express').Router();
const cors = require('cors');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
router.use(cors({origin: 'http://localhost:4200'}));


router.use('/products', require('./products.router'))
router.use('/categories', require('./categories.router'))

module.exports = router;
