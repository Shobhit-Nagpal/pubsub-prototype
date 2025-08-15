"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDev = isDev;
exports.isProd = isProd;
const env_1 = __importDefault(require("../services/env"));
function isDev() {
    return env_1.default.environment === "development";
}
function isProd() {
    return env_1.default.environment === "production";
}
