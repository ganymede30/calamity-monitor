const router = require("express").Router();
const fetch = require("node-fetch");

const baseUrl = "https://newsapi.org/v2/top-headlines?";

router.get("/topHeadlines/:country/:category", (req, res, next) => {
  let endPoint = `${baseUrl}apiKey=${process.env.NEWS_API_KEY}&q=coronavirus&pageSize=100`;
  const { country, category } = req.params;
  endPoint += `&country=${country}&category=${category}`;
  try {
    return fetch(endPoint)
      .then(response => response.json())
      .then(({ articles }) => res.json(articles));
  } catch (error) {
    next(error);
  }
});

router.get("/topHeadlines/:filter", (req, res, next) => {
  let endPoint = `${baseUrl}apiKey=${process.env.NEWS_API_KEY}&q=coronavirus&pageSize=100`;
  if (req.params.filter.length === 2) endPoint += `&country=${req.params.filter}`;
  else endPoint += `&category=${req.params.filter}`;
  return fetch(endPoint)
    .then(response => response.json())
    .then(({ articles }) => res.json(articles));
});

router.get("/topHeadlines", (req, res) => {
  let endPoint = `${baseUrl}apiKey=${process.env.NEWS_API_KEY}&q=coronavirus&pageSize=100`;
  return fetch(endPoint)
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

router.use(notFound);
router.use(errorHandler);

module.exports = router;
