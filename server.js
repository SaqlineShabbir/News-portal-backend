const mongoose =  require('mongoose')
const dotenv = require('dotenv').config()
const colors  = require('colors')


const app = require('./app');
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