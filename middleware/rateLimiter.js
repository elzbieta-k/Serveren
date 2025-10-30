const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMS: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this API, slow down!",
});

module.exports = apiLimiter;
