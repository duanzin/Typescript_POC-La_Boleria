import orderRepository from "../repositories/orderRepository.js";
import { notFoundError } from "../errors/index.js";
import { Order } from "../protocols/types.js";

async function create(order: Order) {
  const client = await orderRepository.getClient(order.clientId);
  const cake = await orderRepository.getCake(order.cakeId);
  if (!client.rows || !cake.rows) throw notFoundError();

  await orderRepository.postOrder(order);
}

async function getAllOrders() {
  const orders = await orderRepository.getAllOrders();
  if (!orders.rows) throw notFoundError();

  return orders;
}

async function getOrdersByDate(date: string | Date) {
  const orders = await orderRepository.getOrdersbyDate(date);
  if (!orders.rows) throw notFoundError();

  return orders;
}

async function getOrderById(id: number) {
  const order = await orderRepository.getOrder(id);
  if (!order.rows) throw notFoundError();

  return order;
}

async function getOrdersByClient(id: number) {
  const orders = await orderRepository.getClientOrders(id);
  if (!orders.rows) throw notFoundError();

  return orders;
}

export default {
  create,
  getAllOrders,
  getOrdersByDate,
  getOrderById,
  getOrdersByClient,
};
