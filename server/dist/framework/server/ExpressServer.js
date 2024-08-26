"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressServer = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const dotenv_1 = __importDefault(require("dotenv"));
const UserRoutes_1 = require("../routes/user/UserRoutes");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
class ExpressServer {
    constructor() {
        this.app = (0, express_1.default)();
        this.server = (0, http_1.createServer)(this.app);
        this.configureMiddleware();
        this.configureRoutes();
        this.configureErrorHandling();
        this.startServer();
    }
    configureMiddleware() {
        this.app.use(express_1.default.json());
        this.app.use((0, cookie_parser_1.default)());
    }
    configureRoutes() {
        this.app.use("/api", UserRoutes_1.userRoutes);
    }
    configureErrorHandling() {
        this.app.use((err, req, res, next) => {
            const statusCode = err.statusCode || 500;
            const message = err.message || "Internal server error";
            res.status(statusCode).json({
                success: false,
                statusCode,
                message,
            });
        });
    }
    startServer() {
        const port = process.env.PORT || 7000;
        this.server.listen(port, () => {
            console.log(`Express server running on port ${port}`);
        });
    }
}
exports.ExpressServer = ExpressServer;
// To initialize the server, create an instance of ExpressServer
// new ExpressServer();
