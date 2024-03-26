const express = require("express");
const server = express();
const AccountRoutes = require("./AccountRoutes");
server.use(express.json());
server.use(AccountRoutes);
module.exports = server;
