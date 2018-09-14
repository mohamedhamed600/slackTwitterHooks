const http = require('http');
const port = process.env.PORT || 3000;
const status = require('./services');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/techtask')
.catch((error)=>{
  console.log(error);
  process.exit(1);
});


app.use(cors());

app.post('/tweets',status.addTweets);

app.get('/tweets',status.getAllTweets)

http.createServer(app).listen(port, () => {
  console.log(`server listening on port ${port}`);
});

module.exports=app;