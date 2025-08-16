import { Request, Response } from "express";
import logger from "../services/logger";
import { sendMessage } from "../services/kafka";

export async function getRoot(req: Request, res: Response) {
  try {
    //Send the kafka message from here
    await sendMessage('WHAT IS UP?');
    res.send('Message sent!')
  } catch (err) {
    logger.error(err);
    res.status(500).send("Internal server error");
  }
}
