const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema(
  {
    search: String,
    email: String,
    time: Number,
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

module.exports = mongoose.model("Favorite", FavoriteSchema);
