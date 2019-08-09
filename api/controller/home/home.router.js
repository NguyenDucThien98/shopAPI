const express = require('express');
const router = express.Router();
const controller = require('./home.controller');

router.get('/', controller.getHomePage);
router.get('/home', controller.getHomePage);

router.get('/home/manufacturer', controller.getManufacturer);
router.get('/home/manufacturer/:id', controller.getManufacturerByID);
router.post('/home/manufacturer/create', controller.createManufacturer);
router.put('/home/manufacturer/update', controller.updateManufacturer);

router.get('/home/product', controller.getListProduct);
router.get('/home/product/:id', controller.getListProductByID);
router.get('/home/product-manufacturer', controller.getHomePage);
router.get('/home/product-manufacturer/:id', controller.getListProductByManufacturer);
router.post('/home/product/create', controller.createProduct);
router.put('/home/product/update', controller.updateProduct);

module.exports = router;