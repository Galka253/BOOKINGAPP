const mongoose = require("mongoose");
const schema = mongoose.Schema;

const roomSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  adds: {
    type: String,
    required: true,
  },
  roomAvailible: {
    type: Number,
    required: true,
  },
});
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
  rooms: [roomSchema],
});

const Hotel = mongoose.model("hotels", hotelSchema);
module.exports = Hotel;
