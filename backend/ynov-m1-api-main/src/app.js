const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const apiRouter = require('./routes');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config()

app.use(cors());

app.use(bodyParser.json());

mongoose.set('strictQuery', false);

mongoose.connect(`mongodb+srv://ouma:<ouma>@cluster0.ukanwfi.mongodb.net/test`)
  .then(() => {
    console.log("Successfully connect to database")
  }) 
.catch(err=>console.log(err))

app.use("/api/v1", apiRouter);
app.use(errorHandler);

app.listen(process.env.PORT, function () {
  console.log("server launch my" );
})