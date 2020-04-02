const router = require("express").Router();
const fetch = require("node-fetch");
const baseUrl = "http://newsapi.org/v2/top-headlines?";
const apiKey = process.env.REACT_APP_NEWS_API_KEY;
module.exports = router;

router.get("/", (req, res, next) => {
  let endPoint = `${baseUrl}apiKey=${apiKey}&q=coronavirus&pageSize=100`;

  try {
    return fetch(endPoint)
      .then(response => response.json())
      .then(({ articles }) => res.json(articles));
  } catch (error) {
    next(error);
  }
});

router.get("/:filter", (req, res, next) => {
  let endPoint = `${baseUrl}apiKey=${apiKey}&q=coronavirus&pageSize=100`;

  if (req.params.filter.length === 2) endPoint += `&country=${req.params.filter}`;
  else endPoint += `&category=${req.params.filter}`;
  try {
    return fetch(endPoint)
      .then(response => response.json())
      .then(({ articles }) => res.json(articles));
  } catch (error) {
    next(error);
  }
});

router.get("/:country/:category", (req, res, next) => {
  let endPoint = `${baseUrl}apiKey=${apiKey}&q=coronavirus&pageSize=100`;
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
