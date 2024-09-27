const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const essaySchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  draft: {
    type: String,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true
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

module.exports = mongoose.model("Essay", essaySchema);
