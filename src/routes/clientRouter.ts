import { Router } from "express";
import { createClient } from "../controllers/clientController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { clientSchema } from "../schemas/clientSchema.js";

const clientRouter = Router();

clientRouter.post("/", validateSchema(clientSchema), createClient);

export default clientRouter;