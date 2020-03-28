const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");

require("dotenv").config();

// logging middleware
app.use(morgan());
app.use(cors());

// body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serves static files - react
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
}

// redirection /api
app.use("/api", require("./api/headlines"));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build", "index.html"));
// });

function notFound(req, res, next) {
  res.status(404);
  const error = new Error("Not Found");
  next(error);
}

function errorHandler(error, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Listening on port ", port);
});

module.exports = app;
