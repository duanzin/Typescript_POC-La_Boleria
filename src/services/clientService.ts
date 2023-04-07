import { Client } from "../protocols/types.js";
import { postClient } from "../repositories/clientRepository.js";

export async function create(client: Client) {
  await postClient(client);
}
