const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  url: { type: String },
  vote: { type: String }
});

// const userSchema = new mongoose.Schema({
//   id: Number,
//   votes: [{image: String, vote: String}]
// });

const User = module.exports = mongoose.model('user', UserSchema);
