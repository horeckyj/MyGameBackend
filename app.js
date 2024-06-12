const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

const app = express();

const users = require("./routes/users");

// Connected To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database" + config.database);
});

// On Error
mongoose.connection.on("error", (err) => {
  console.log("Connected error:" + err);
});

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

app.use("/users", users);

// Index route
app.get("/", (req, res) => {
  res.send("Invalid Endpoint!");
});

//Start Server
app.listen(port, () => {
  console.log("Server started on port: " + port);
});
