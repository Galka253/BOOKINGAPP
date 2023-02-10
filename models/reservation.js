const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reservationSchema = new schema({
  startAt: { type: Date, required: true },
  endAt: { type: Date, required: true },
  totalPrice: Number,
  days: Number,
  guests: Number,
  createdAt: { type: Date, default: Date.now },
  user: { type: schema.Types.ObjectId, ref: "User" },
  hotel: { type: String, required: true },

  status: { type: String, default: "pending" },
});
const Reservation = mongoose.model("reservations", reservationSchema);
module.exports = Reservation;
