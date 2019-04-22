const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const resolve = require('path').resolve;
const mongoose = require('mongoose');

const DATABASE_URL = 'mongodb://localhost:27017/music-player';

mongoose.connect(DATABASE_URL, { useNewUrlParser: true })
.then(()=> {
  app.listen(3000, () => {
    console.log('Listening on port 3000...')
  })
});

app.use('/audio', express.static('audio'));
app.use(express.static('public'));
app.use('/build', express.static('build'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname + '/../client/templates/index.html'));
});

app.use((err, req, res, next) => {
  throw err;
});

[
  'musicFiles'
].forEach((file) => {
  require(`./${file}`)(app);
});

module.exports = app;
