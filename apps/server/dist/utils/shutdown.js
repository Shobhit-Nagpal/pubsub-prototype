"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gracefulShutdown = gracefulShutdown;
const logger_1 = __importDefault(require("../services/logger"));
function gracefulShutdown(server, signal) {
    try {
        logger_1.default.log(`Received ${signal}! Shutting down server gracefully...`);
        server.close();
    }
    catch (err) {
        logger_1.default.error(err);
        process.exit(1);
    }
}
