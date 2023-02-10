const router = require("express").Router();
//Admin verification
const Hotel = require("../models/hotel");
//const Room = require("../models/room");
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");
//Create hotel
router.post("/", isAuth, isAdmin, async (req, res) => {
  const newHotel = new Hotel(req.body);
  await newHotel.save();
  res.send({ msg: "Hotel is created successfully", newHotel });
});
//Update hotel
router.put("/update/:_id", isAuth, isAdmin, async (req, res) => {
  const { _id } = req.params;
  const hotel = await Hotel.findOneAndUpdate({ _id }, { $set: req.body });
  res.json({ msg: "Hotel updated", hotel });
});
//Delete hotel
router.delete("/delete/:id", isAuth, isAdmin, async (req, res) => {
  await Hotel.findByIdAndDelete(req.params.id);
  res.json({ msg: "Hotel has been deleted" });
});
//Get hotel
router.get("/find/:id", isAuth, isAdmin, async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  res.json({ msg: "Hotel is found", hotel });
});
//Get all hotels
router.get("/findAll", isAuth, isAdmin, async (req, res) => {
  const list = await Hotel.find();
  res.json({ msg: "List of hotels", list });
});
//get  hotel by id

router.get("/room/:id", isAuth, isAdmin, async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);

  res.json({ msg: "Rooms", hotel });
});

module.exports = router;
