const router = require("express").Router();

//const Room = require("../models/room");
const Hotel = require("../models/hotel");
const User = require("../models/user");
const Reservation = require("../models/reservation");
const isAuth = require("../middleware/isAuth");
//user,admin

//create booking by user
router.post("/addReservation", isAuth, async (req, res) => {
  const user = req.user.id;
  const { startAt, endAt, days, totalPrice, guests } = req.body;
  const reservation = new Reservation({
    startAt,
    endAt,
    days,
    totalPrice,
    guests,
    user,
  });
  await reservation.save();
  res.json({ msg: "Reservation created", reservation });
});
//manage booking by user
router.get("/manage", isAuth, async (req, res) => {});
//list of bookings by admin
router.get("/list");

module.exports = router;
