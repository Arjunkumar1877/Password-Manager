"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoDb_1 = require("./framework/database/databaseServer/MongoDb");
require("./framework/server/ExpressServer");
const ExpressServer_1 = require("./framework/server/ExpressServer");
const expressServer = new ExpressServer_1.ExpressServer();
(0, MongoDb_1.connectDb)();
