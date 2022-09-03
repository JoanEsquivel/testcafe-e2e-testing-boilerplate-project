let os = require("os");

module.exports = {
  skipJsErrors: true,
  hostname: os.hostname(),
  // other settings
  baseUrl: "https://www.saucedemo.com",
  concurrency: 2,
};
