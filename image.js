const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  url: { type: String },
  upVotes: { type: Number },
  downVotes: { type: Number }
});

const Image = module.exports = mongoose.model('image', ImageSchema);
