import { db } from "../config/database.js";
import { Client } from "../protocols/types.js";

export async function postClient(client: Client) {
  db.query(
    `INSERT INTO clients (name, address, phone) VALUES($1, $2, $3)`,
    [client.name, client.address, client.phone]
  );
}
