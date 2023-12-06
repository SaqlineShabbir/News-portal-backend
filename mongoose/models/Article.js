const mongoose = require('mongoose')


const ArticleSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'please provide a name'],
            minLength: [1, 'minimum length 1 word'],
            maxLength: [100, 'maximum length 100 word'],
            trim: true,
            unique: true,
          },
          description: {
            type: String,
            required: [true, 'please provide description'],
            trim: true,
          },
          photo: {
            type: String,
            required: [true, 'please provide photo'],
          },
    },
    { timeStamp: new Date() }
)

//model
const Article = mongoose.model('Article', ArticleSchema);

module.exports =Article;