const API_KEY = require('./secrets.js')


fetch('http://newsapi.org/v2/top-headlines?apiKey=40c0d1767a164ace8104e58baacc2076&category=health&q=coronavirus')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });












// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('40c0d1767a164ace8104e58baacc2076');
// // To query /v2/top-headlines
// // All options passed to topHeadlines are optional, but you need to include at least one of them
// // newsapi.v2.topHeadlines({
// //   sources: 'bbc-news,the-verge',
// //   q: 'bitcoin',
// //   category: 'business',
// //   language: 'en',
// //   country: 'us'
// // }).then(response => {
// //   console.log(response);
// //   /*
// //     {
// //       status: "ok",
// //       articles: [...]
// //     }
// //   */
// // });
// // To query /v2/everything
// // You must include at least one q, source, or domain
// newsapi.v2.everything({
//   q: 'coronavirus'
// //   sources: 'bbc-news,the-verge',
// //   domains: 'bbc.co.uk, techcrunch.com',
// //   from: '2017-12-01',
// //   to: '2017-12-12',
// //   language: 'en',
// //   sortBy: 'relevancy',
// //   page: 2
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });
// // To query sources
// // All options are optional
// // newsapi.v2.sources({
// //   category: 'technology',
// //   language: 'en',
// //   country: 'us'
// // }).then(response => {
// //   console.log(response);
// //   /*
// //     {
// //       status: "ok",
// //       sources: [...]
// //     }
// //   */
// // });



// console.log(NewsAPI)






