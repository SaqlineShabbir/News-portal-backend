const mongoose = require('mongoose')


const ArticleSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'title required'],
            minLength: [8, 'minimum length 8 word'],
            maxLength: [100, 'maximum length 100 word'],
            trim: true,
            unique: true,
          },
          description: {
            type: String,
            required: [true, 'description required'],
            trim: true,
          },
          avatar: {
            type: String,
            required: true,
          },
    },
    { timeStamps: new Date() }
)

//model
const Article = mongoose.model('Article', ArticleSchema);

module.exports =Article;