const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    require: true,
  },
  updatedAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
    require: true,
  },
});

module.exports = mongoose.model('User', userSchema)
