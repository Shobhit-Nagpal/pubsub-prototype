import logger from "../services/logger";
import { FILE_PATH } from "../consts/topic";
import { appendFile } from "fs/promises";

export async function writeToSystem(message: string) {
  try {
    await appendFile(FILE_PATH, message + '\n', {
      encoding: "utf-8",
    });
  } catch (err) {
    logger.error("Failed to write to file");
  }
}
