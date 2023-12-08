const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser")


const mongoose = require('mongoose')
const productRoute = require('./mongoose/routes/ProductRoute');
const articleRoute = require('./mongoose/routes/ArticleRoute');



//middlewares
app.use(express.json())
app.use(cors())
app.use(bodyParser.json()).use(bodyParser.urlencoded({extended:true}))



//User posting and getting from database

app.use('/api/product', productRoute);
app.use('/api/article', articleRoute);
//access image publicly
app.use('/uploads',express.static('uploads'))

app.get('/', (req, res) => {
  res.send('route  is working');
});

module.exports = app;