import { NextFunction, Request, Response } from "express";
import { create } from "../services/cakeService.js";
import { Cake } from "../protocols/types.js";

export async function createCake(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const newCake = req.body as Cake;
  try {
    await create(newCake);
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}
