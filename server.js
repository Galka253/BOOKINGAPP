//import express
const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();
app.use(express.json());
connectDB();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/hotels", require("./routes/hotels"));
app.use("/api/rooms", require("./routes/rooms"));
app.use("/api/reservations", require("./routes/reservations"));

const port = 6000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running on port ${port}`);
});
