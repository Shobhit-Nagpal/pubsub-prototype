"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const level_1 = require("../core/level");
const logger_1 = require("../utils/logger");
class Logger {
    log(...data) {
        console.log(this._prefix(), this._messagePrefix(level_1.LogLevel.Normal), ...data);
    }
    error(err) {
        console.error(this._prefix(), this._messagePrefix(level_1.LogLevel.Error), err);
    }
    warn(...data) {
        console.log(this._prefix(), this._messagePrefix(level_1.LogLevel.Warn), ...data);
    }
    _timestamp() {
        return new Date().toString();
    }
    _messagePrefix(level, timestamp = this._timestamp()) {
        return `${timestamp}: [${(0, logger_1.getLogLevel)(level)}]: `;
    }
    _prefix() {
        return "[logger]: ";
    }
}
const logger = new Logger();
exports.default = logger;
