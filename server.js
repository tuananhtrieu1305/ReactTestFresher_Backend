require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const database = process.env.DATABASE_URL;
const app = express();
const port = process.env.PORT || 8081;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose
  .connect(database)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => handleError(error));
