const mongoose = require('mongoose');

const audioFileSchema = new mongoose.Schema({
  artist: {
    type: String
  },
  name: {
    type: String,
    unique: true
  },
  duration: {
    type: String
  }
});

const AudioFile = mongoose.model('AudioFile', audioFileSchema);

module.exports = AudioFile;
