import { Router } from "express";
import { getRoot } from "../controllers";

const rootRouter = Router();

rootRouter.get("/", getRoot);

export default rootRouter;
