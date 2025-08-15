import { TOPIC } from "../consts/topic";
import { connectAndSubscribeConsumer, runConsumer } from "./kafka";
import logger from "./logger";

export async function initServices() {
  try {
    await connectAndSubscribeConsumer(TOPIC);
    await runConsumer();
  } catch (err) {
    logger.error(`Error initializing services: ${err}`);
    process.exit(1);
  }
}
