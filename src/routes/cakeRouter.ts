import { Router } from "express";
import { createCake } from "../controllers/cakeController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { cakeSchema } from "../schemas/cakeSchema.js";

const cakeRouter = Router();

cakeRouter.post("/", validateSchema(cakeSchema), createCake);

export default cakeRouter;