const Article = require('../models/Article');
const cloudinary = require('cloudinary')
const dotenv =   require('dotenv').config()


// cloudinary.config({
//     cloud_name:process.env.CLOUD_NAME,
//     api_key:process.env.CLOUD_API_KEY,
//     api_secret:process.env.CLOUD_API_SECRET
// })


exports.getArticles = async (req, res, next) => {
  try {
    const result = await Article.find({});
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      error:err.message,
      message: err.message.stack,
    });
  }
};

exports.postArticle = async (req, res, next) => {
  try {
//cloudenary
 const file=req.file.path
 const rezz =  await cloudinary.uploader.upload(file)

 //save to the database
      const article = await Article.create({
        ...req.body,
        avatar:rezz.url
      });
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
