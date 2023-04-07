import { Router } from "express";
import { orderSchema } from "../schemas/orderSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import orderController from "../controllers/orderController.js";

const orderRouter = Router();

orderRouter.post("/", validateSchema(orderSchema), orderController.create);
orderRouter.get("/", orderController.getOrders);
orderRouter.get("/:id", orderController.getOrderbyId);
orderRouter.get("/clients/:id", orderController.getOrdersbyClient);

export default orderRouter;
