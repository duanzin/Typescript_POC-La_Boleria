import { NextFunction, Request, Response } from "express";
import { create } from "../services/clientService.js";
import { Client } from "../protocols/types.js";

export async function createClient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const newClient = req.body as Client;
  try {
    await create(newClient);
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}
