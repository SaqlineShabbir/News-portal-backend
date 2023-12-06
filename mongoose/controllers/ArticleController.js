const Article = require('../models/Article');

exports.getArticles = async (req, res, next) => {
  try {
    const article = await Article.find({});
    res.status(200).json({
      status: 'success',
      data: article,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.postArticle = async (req, res, next) => {
  try {
    const result = await Article.create(req.body);
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message,
    });
  }
};
exports.getArticleById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Article.findOne({ _id: id });
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message,
    });
  }
};
