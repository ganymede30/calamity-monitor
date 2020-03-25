const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fetch = require("node-fetch");

require("dotenv").config();
const app = express();

app.use(morgan());
app.use(cors());

const baseUrl = "http://newsapi.org/v2/top-headlines?";
// ${baseUrl}top-headlines?apiKey=${APIKey}&q=coronavirus&pageSize=100`
app.get("/topHeadlines", (req, res) => {
  const result = fetch(`${baseUrl}apiKey=${process.env.NEWS_API_KEY}&q=coronavirus`)
    .then(response => response.json())
    .then(({ articles }) => res.json(articles));
  return result;
});

// app.get('/allNews', (req, res) => {
//     const url = 'http://newsapi.org/v2/everything?q=coronavirus'
//     fetch(`${url}&apiKey=${process.env.NEWS_API_KEY}`)
//       .then(response => response.json())
//       .then(json => res.json(json.articles))
// })

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
