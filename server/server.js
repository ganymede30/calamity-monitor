const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT || 3001;
const path = require("path");

require("dotenv").config();
const app = express();

app.use(morgan());
app.use(cors());

app.use("/api", require("./api"));

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Listening on port ", port);
});
