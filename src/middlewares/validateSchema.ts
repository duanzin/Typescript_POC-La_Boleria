import { NextFunction, Request, Response } from "express";
import { conflictError } from "../errors/index.js";
import { Schema } from "joi";

export function validateSchema(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      throw conflictError(error.details.map((detail) => detail.message));
    }

    next();
  };
}
