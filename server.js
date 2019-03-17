const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

app.use('/audio', express.static('audio'));
app.use(express.static('public'));
app.use('/build', express.static('build'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/templates/index.html');
});
