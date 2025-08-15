import env from "./services/env";
import logger from "./services/logger";
import express from "express";
import cors from "cors";
import { gracefulShutdown } from "./utils/shutdown";

async function initServer() {
  try {
    logger.log("Starting fs server...");

    const app = express();

    app.use(cors());

    app.get("/", (_req, res) => res.send("Hi"));

    const server = app.listen(env.port, () => {
      logger.log(`Fs server listening on port ${env.port}...`);
    });

    return server;
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}

initServer().then((server) => {
  process.on("SIGINT", () => gracefulShutdown(server, "SIGINT"));
  process.on("SIGTERM", () => gracefulShutdown(server, "SIGTERM"));
});

