const server = require("./server");
const router = require("./router");
const handlers = require("./handlers");

const route = {};
route["/"] = handlers.impares;
route["/impares"] = handlers.impares;
route["/impares.html"] = handlers.impares;
route["404"] = handlers.notfound;

server.start(router.route, route);