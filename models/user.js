const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },

  phone: {
    type: Number,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  img: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
