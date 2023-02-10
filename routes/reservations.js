const router = require("express").Router();

//const Room = require("../models/room");
const Hotel = require("../models/hotel");
const User = require("../models/user");
const Reservation = require("../models/reservation");
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");
//user,admin

//create booking by user
router.post("/addReservation", isAuth, async (req, res) => {
  const user = req.user.id;
  const { startAt, endAt, days, totalPrice, guests, hotel } = req.body;
  const reservation = new Reservation({
    startAt,
    endAt,
    days,
    totalPrice,
    guests,
    user,
    hotel,
  });
  await reservation.save();
  res.json({ msg: "Reservation created", reservation });
});
//manage booking by user
router.put("/manage/:_id", isAuth, async (req, res) => {
  const { _id } = req.params;
  const reservation = await Reservation.findOneAndUpdate(
    { _id },
    { $set: req.body }
  );
  res.json({ msg: "Reservation updated", reservation });
});
//list of bookings by admin
router.get("/reservationList", isAuth, isAdmin, async (req, res) => {
  const list = await Reservation.find();
  res.json({ msg: "List of reservations", list });
});

module.exports = router;
