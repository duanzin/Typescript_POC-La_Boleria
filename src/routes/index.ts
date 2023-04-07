import { Router } from "express";
import cakeRouter from "./cakeRouter.js";
import clientRouter from "./clientRouter.js";
import orderRouter from "./orderRouter.js";

const routes = Router();

routes.use("/cakes", cakeRouter);
routes.use("/clients", clientRouter);
routes.use("/orders", orderRouter);

export default routes;