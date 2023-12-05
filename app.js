const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')
const productRoute = require('./mongoose/routes/ProductRoute');
//middlewares
app.use(express.json())
app.use(cors())

//User posting and getting from database

app.use('/api/product', productRoute);

app.get('/', (req, res) => {
  res.send('route  is working');
});

module.exports = app;