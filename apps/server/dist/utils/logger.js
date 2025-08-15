"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogLevel = getLogLevel;
const level_1 = require("../core/level");
function getLogLevel(level) {
    switch (level) {
        case level_1.LogLevel.Normal:
            return "log";
        case level_1.LogLevel.Error:
            return "error";
        case level_1.LogLevel.Warn:
            return "warn";
        default:
            return "__unsupported_level__";
    }
}
