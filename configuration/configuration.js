const env = process.env.NODE_ENV || "local"
const configuration = require("./env/" + env);
module.exports = configuration;
