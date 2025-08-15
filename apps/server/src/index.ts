import env from "./services/env";
import logger from "./services/logger";
import express from "express";
import cors from "cors";
import { gracefulShutdown } from "./utils/shutdown";
import rootRouter from "./routes";

async function initServer() {
  try {
    logger.log("Starting main server...");

    const app = express();

    app.use(cors());
    app.use("/", rootRouter);

    const server = app.listen(env.port, () => {
      logger.log(`Main server listening on port ${env.port}...`);
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
