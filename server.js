const mongoose =  require('mongoose')
const dotenv = require('dotenv').config()
const colors  = require('colors')
const cloudinary = require('cloudinary')

const app = require('./app');

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.CLOUD_API_KEY,
  api_secret:process.env.CLOUD_API_SECRET
})
// connect your server to mongoDb
const uri = process.env.DATABASE_URL;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Database connection is successful`.blue.bold);
  });

  //port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}`.yellow.bold);
});