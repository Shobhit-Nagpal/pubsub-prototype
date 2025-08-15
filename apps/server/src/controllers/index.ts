import { Request, Response } from "express";
import logger from "../services/logger";

export function getRoot(req: Request, res: Response) {
  try {
    //Send the kafka message from here
  } catch (err) {
    logger.error(err);
    res.status(500).send("Internal server error");
  }
}
