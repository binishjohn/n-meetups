const server = require("./server/server");
const config = require("./configuration/configuration");

server.create(config);
server.start();
