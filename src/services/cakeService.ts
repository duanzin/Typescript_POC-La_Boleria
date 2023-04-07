import cakeRepository from "../repositories/cakeRepository.js";
import { DuplicatedCakeError } from "../errors/index.js";
import { Cake } from "../protocols/types.js";

export async function create(cake: Cake) {
  const { rowCount } = await cakeRepository.getCake(cake.name);
  if (rowCount) throw DuplicatedCakeError();

  await cakeRepository.postCake(cake);
}
