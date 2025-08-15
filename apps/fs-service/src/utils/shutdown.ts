import logger from "../services/logger";
import { ExpressServer } from "../types/server";

export function gracefulShutdown(server: ExpressServer, signal: string) {
  try {
    logger.log(`Received ${signal}! Shutting down server gracefully...`);
    server.close((err) => {
      if (err) {
        logger.error(`Error during server shutdown: ${err}`);
        process.exit(1);
      } else {
        logger.log("Server closed successfully");
        process.exit(0);
      }
    });
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}
