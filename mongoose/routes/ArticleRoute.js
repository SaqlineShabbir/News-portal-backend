const express = require('express');
const router = express.Router();
const articleController = require('../controllers/ArticleController');
const upload = require('../middlewares/FileUpload')
router
  .route('/')
  .post(upload.single('avatar'),articleController.postArticle)

  .get(articleController.getArticles);
router.route('/:id').get(articleController.getArticleById);

module.exports = router;
