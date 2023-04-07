import { NextFunction, Request, Response } from "express";
import orderService from "../services/orderService.js";
import { Order } from "../protocols/types.js";

async function create(req: Request, res: Response, next: NextFunction) {
  const newOrder = req.body as Order;
  try {
    await orderService.create(newOrder);
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function getOrders(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.query.date) {
      const orders = await orderService.getAllOrders();
      return res.status(200).send(orders);
    }
    const date = req.query.date as string | Date;
    const orders = await orderService.getOrdersByDate(date);
    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
}

async function getOrderbyId(req: Request, res: Response, next: NextFunction) {
  const id: number = parseInt(req.params.id);
  try {
    const order = await orderService.getOrderById(id);
    res.status(200).send(order);
  } catch (err) {
    next(err);
  }
}

async function getOrdersbyClient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id: number = parseInt(req.params.id);
  try {
    const orders = await orderService.getOrdersByClient(id);
    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
}

export default {
  create,
  getOrders,
  getOrderbyId,
  getOrdersbyClient,
};
