"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./services/env"));
const logger_1 = __importDefault(require("./services/logger"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
function initServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            logger_1.default.log("Starting main server...");
            const app = (0, express_1.default)();
            app.use((0, cors_1.default)());
            app.get("/", (_req, res) => res.send("Hi"));
            app.listen(env_1.default.port, () => {
                logger_1.default.log(`Main server listening on port ${env_1.default.port}...`);
            });
        }
        catch (err) {
            logger_1.default.error(err);
            process.exit(1);
        }
    });
}
initServer();
