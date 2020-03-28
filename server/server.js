const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fetch = require("node-fetch");
const port = process.env.PORT || 3000;
const path = require("path");

require("dotenv").config();
const app = express();

app.use(morgan());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"));
  });
}

const baseUrl = "http://newsapi.org/v2/top-headlines?";
const apiKey = process.env.REACT_APP_NEWS_API_KEY;

app.get("/topHeadlines/:country/:category", (req, res, next) => {
  let endPoint = `${baseUrl}apiKey=${apiKey}&q=coronavirus&pageSize=100`;
  const { country, category } = req.params;
  endPoint += `&country=${country}&category=${category}`;
  try {
    fetch(endPoint)
      .then(response => response.json())
      .then(({ articles }) => res.json(articles));
  } catch (error) {
    next(error);
  }
});

app.get("/topHeadlines/:filter", (req, res, next) => {
  let endPoint = `${baseUrl}apiKey=${apiKey}&q=coronavirus&pageSize=100`;
  if (req.params.filter.length === 2) endPoint += `&country=${req.params.filter}`;
  else endPoint += `&category=${req.params.filter}`;
  fetch(endPoint)
    .then(response => response.json())
    .then(({ articles }) => res.json(articles));
});

app.get("/topHeadlines", (req, res) => {
  let endPoint = `${baseUrl}apiKey=${apiKey}&q=coronavirus&pageSize=100`;
  fetch(endPoint)
    .then(response => response.json())
    .then(({ articles }) => res.json(articles));
});

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

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Listening on port ", port);
});
