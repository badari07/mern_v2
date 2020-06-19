const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  UserName: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
