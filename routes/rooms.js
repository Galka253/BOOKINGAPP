const router = require("express").Router();
//Admin verification
const Hotel = require("../models/hotel");
const Room = require("../models/room");

//Create room
router.post("/:hotelid", async (req, res) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  const savedRoom = await newRoom.save();

  await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } });
  res.send({ msg: "Room is created", savedRoom });
});

//Update
router.put("/availibility/:id", async (req, res) => {
  const roomAvailible = await Room.updateOne(
    { "roomNumbers._id": req.params.id },
    {
      $push: {
        "roomNumbers.$.unavailableDates": req.body.dates,
      },
    }
  );
  res.send({ msg: "Room status has been changed", roomAvailible });
});
router.put("/:id", async (req, res) => {
  const { _id } = req.params;
  const room = await Room.findOneAndUpdate({ _id }, { $set: req.body });
  res.json({ msg: "Room is updated", room });
});

//Delete
router.delete("/:id/:hotelid", async (req, res) => {
  const hotelid = req.params.hotelid;
  const roomDeleted = await Room.findByIdAndDelete(req.params.id);
  const hotelUpdated = await Hotel.findByIdAndDelete(hotelid, {
    $pull: { rooms: req.params.id },
  });
  res.json({ msg: "Room has been deleted", roomDeleted, hotelUpdated });
});

//Get
router.get("/:id", async (req, res) => {
  const room = await Room.findById(req.params.id);
  res.json({ msg: "Info room", room });
});

//Get all
router.get("/", async (req, res) => {
  const rooms = await Room.find();
  res.json({ msg: "List of rooms", rooms });
});

module.exports = router;
