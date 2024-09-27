const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");
const cors = require("cors");
require("dotenv").config();
const { default: mongoose } = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/auth", authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(MONGODB_URL)
  .then((data) => {
    console.log("connected");
    app.listen(3000);
  })
  .catch((error) => {
    console.log("not connected");
  });
