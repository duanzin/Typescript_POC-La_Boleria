import { db } from "../config/database.js";
import { Cake } from "../protocols/types.js";

async function getCake(name: string) {
  return db.query(`SELECT * FROM cakes WHERE name = $1`, [name]);
}

async function postCake(cake: Cake) {
  db.query(
    `INSERT INTO cakes (name, price, description, image) VALUES($1, $2, $3, $4)`,
    [cake.name, cake.price, cake.description, cake.image]
  );
}

export default {
  getCake,
  postCake,
};
