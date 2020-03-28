const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
require("dotenv").config();

// logging middleware
app.use(morgan());

// body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "build")));

// redirection /api
app.use("/api", require("./api"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Listening on port ", port);
});

module.exports = app;
