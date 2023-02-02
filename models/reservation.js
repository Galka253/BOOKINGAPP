const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reservationSchema = new schema({
  startAt: { type: Date, required: true },
  endAt: { type: Date, required: true },
  totalPrice: Number,
  days: Number,
  guests: Number,
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "users" },
  hotel: { type: Schema.Types.ObjectId, ref: "hotels" },
  room: { type: Schema.Types.ObjectId, ref: "rooms" },

  status: { type: String, default: "pending" },
});
const Reservation = mongoose.model("reservations", reservationSchema);
module.exports = Reservation;
