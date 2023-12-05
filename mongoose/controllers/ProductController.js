const Product = require('../models/Product');

exports.getProducts = async (req, res, next) => {
  try {
    const product = await Product.find({});
    res.status(200).json({
      status: 'success',
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.postProduct = async (req, res, next) => {
  try {
    const result = await Product.create(req.body);
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
exports.getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Product.findOne({ _id: id });
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
