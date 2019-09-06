const server = require("./server");
const router = require("./router");
const handlers = require("./handlers");

const route = {};
route["/impares.html"] = handlers.impares;