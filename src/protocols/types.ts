export type Cake = {
  name: string;
  price: number;
  description: string;
  image: URL;
};

export type Client = {
  name: string;
  address: string;
  phone: string;
};

export type Order = {
  clientId: number;
  cakeId: number;
  quantity: number;
  totalPrice: number;
};
