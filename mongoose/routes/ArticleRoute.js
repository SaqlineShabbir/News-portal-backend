const express = require('express');
const router = express.Router();
const articleController = require('../controllers/ArticleController');

router
  .route('/')
  .post(articleController.postArticle)

  .get(articleController.getArticles);
router.route('/:id').get(articleController.getArticleById);

module.exports = router;
