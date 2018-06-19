const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const songSchema = new Schema({
  song: Array
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;