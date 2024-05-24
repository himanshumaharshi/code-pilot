const express = require("express");
const dotenv = require("dotenv");

const app = express();

const database = require("./config/database");
database.connect();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening to Port: ${PORT}`);
});

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "server is up",
  });
});

app.use(express.json());


