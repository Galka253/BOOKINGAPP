const mongoose = require("mongoose");
const schema = mongoose.Schema;

const hotelSchema = new schema({
  name: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [{ type: schema.Types.ObjectId, ref: "Room" }],
  },
});

const Hotel = mongoose.model("hotels", hotelSchema);
module.exports = Hotel;
