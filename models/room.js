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
  description: {
    type: String,
    required: true,
  },
  roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
});

const Room = mongoose.model("rooms", roomSchema);
module.exports = Room;
