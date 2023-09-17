const mongoose = require("mongoose");

// connect to the database
mongoose.connect("mongodb+srv://Otp_based_Registration:Gupta&&1998@cluster0.oidggmh.mongodb.net/");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error connecting to db"));


db.once("open", function () {
  console.log("successfully connected to the database");
});
module.exports = db;