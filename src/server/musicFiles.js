const AudioFile = require('../models/AudioFile');
const Promise = require('bluebird');

module.exports = (app) => {

  /*
    body: {
      files: [
        {
          name: 'music_file.mp3',
          artist: 'Unknown',
          duration: '2:51'
        }
      ]
    }
  */
  app.post('/musicFiles', (req, res) => {
    const {files} = req.body;
    Promise.each(files, ({name, artist, duration}) => {
      new AudioFile({
        name,
        artist,
        duration
      }).save();
    }).then(() => {
      res.sendStatus(200);
    });
  });

  app.get('/musicFiles', (req, res) => {
    AudioFile.find({})
    .then((audioFiles) => {
      res.json(audioFiles);
    })
  });
}
