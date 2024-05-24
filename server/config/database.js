const mongoose = require("mongoose");
require("dotenv").config();
const { MONGODB_URL } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((error) => {
      console.log("Error Establishing connection to database");
      console.log(error);
      process.exit(1);
    });
};
