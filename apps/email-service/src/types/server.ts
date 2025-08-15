import { IncomingMessage, Server, ServerResponse } from "http";

export type ExpressServer = Server<
  typeof IncomingMessage,
  typeof ServerResponse
>;
