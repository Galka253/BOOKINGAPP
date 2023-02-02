const mongoose = require("mongoose");
const config = require("config");

const connectDB = () => {
  mongoose
    .set("strictQuery", true)
    .connect(config.get("MONGO_URI"))
    .then(() => {
      console.log("mongoose connected");
    })
    .catch((err) => console.log(err));
};
module.exports = connectDB;
