import joi from "joi";

export const cakeSchema = joi.object({
  name: joi.string().min(2).required(),
  price: joi.number().greater(0).required(),
  description: joi.string().required(),
  image: joi.string().uri().required(),
});