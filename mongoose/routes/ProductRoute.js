const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

router
  .route('/')
  .post(productController.postProduct)

  .get(productController.getProducts);
router.route('/:id').get(productController.getProductById);

module.exports = router;
