import producer from "../services/kafka";
import logger from "../services/logger";
import { ExpressServer } from "../types/server";

export function gracefulShutdown(server: ExpressServer, signal: string) {
  try {
    logger.log(`Received ${signal}! Shutting down server gracefully...`);
    server.close(async (err) => {
      if (err) {
        logger.error(`Error during server shutdown: ${err}`);
        process.exit(1);
      } else {
        await producer.disconnect();
        logger.log("Disconnected producer successfully");

        logger.log("Server closed successfully");
        process.exit(0);
      }
    });
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}
