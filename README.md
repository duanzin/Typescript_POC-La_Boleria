# Typescript_POC-La_Boleria

> a simple api for a fake cake store

## Setting up the API

After downloading the project, install all dependencies show on the package.json file and create an sql database using the dump.sql file. Creating the database using PgAdmin is recommended.

On the .env file, set DATABASE_URL to your database link and MODE to dev.

>(Optional) you can also set PORT to your preferred port. By default the project will run on port 5000.

## Running the API

To start the api, run the following code

```
npm run dev
```

## Routes

### Create a cake

```
POST /cakes
```
Expected input

```
{
		"name": "Bolo de pote",
		"price": 13.00,
		"description": "Bolo de chocolate com recheio de leite ninho",
		"image":"encurtador.com.br/iDIX0",
}
```

Expected response

```
return: 201 created
```

### Create a client

```
POST /clients
```
Expected input

```
{
    "name": "Fulana",
    "address": "Rua tal",
    "phone": "2199999999"
}
```

Expected response

```
return: 201 created
```

### Create an order

```
POST /orders
```
Expected input

```
{
    "clientId": 1,
    "cakeId": 1,
    "quantity": 2,
    "totalPrice": 26.00
}
```

Expected response

```
return: 201 created
```

### Get all orders

```
GET /orders
```

Expected response

```
[
   {
	    "client": {
	        "id": 1,
	        "name": "Fulana",
	        "address": "Rua tal",
	        "phone": "2199999999"
	    },
	    "cake": {
					"id": 1
	        "name": "Bolo de pote",
	        "price": "13.00",
					"description": "Bolo de chocolate com recheio de leite ninho",
					"image": "encurtador.com.br/iDIX0"
	    },
	    "createdAt": "2022-03-16",
	    "quantity": 2,
	    "totalPrice": 26.00,
		}
]
```

### Get all orders from a specific date

```
GET /orders?date=
```

example

```
GET /orders?date=2022-03-16
```

Expected response

```
[
   {
	    "client": {
	        "id": 1,
	        "name": "Fulana",
	        "address": "Rua tal",
	        "phone": "2199999999"
	    },
	    "cake": {
					"id": 1
	        "name": "Bolo de pote",
	        "price": "13.00",
					"description": "Bolo de chocolate com recheio de leite ninho",
					"image": "encurtador.com.br/iDIX0"
	    },
	    "createdAt": "2022-03-16",
	    "quantity": 2,
	    "totalPrice": 26.00,
		}
]
```

### Get order with a specific id

```
GET /orders/:id
```

example

```
GET /orders/1
```

Expected response

```
{
    "client": {
        "id": 1,
        "name": "Fulana",
        "address": "Rua tal",
        "phone": "2199999999"
    },
    "cake": {
				"id": 1
        "name": "Bolo de pote",
        "price": "13.00",
				"description": "Bolo de chocolate com recheio de leite ninho",
				"image": "encurtador.com.br/iDIX0"
    },
    "createdAt": "2022-03-16",
    "quantity": 2,
    "totalPrice": 26.00,
}
```

### Get all orders from a specific client

```
GET /orders/clients/:id
```

example

```
GET /orders/clients/1
```

Expected response

```
[
    {
        "orderId": 1,
        "quantity": 2,
        "createdAt": "2022-03-16 10:30",
        "totalPrice": 26.00,
        "cakeName": "Bolo de pote"
    }
]
```
