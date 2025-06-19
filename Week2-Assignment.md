

# 📦 Express.js RESTful API – Week 2 Assignment

This project is a **RESTful API** built with **Express.js**, implementing full CRUD operations on a `Product` resource with middleware, validation, filtering, pagination, search, and error handling.


## 📁 Project Structure

---
week-2-assignment/
├── config/
│   └── db.js
├── controllers/
│   └── productController.js
├── middleware/
│   ├── Auth.js
│   ├── logger.js
│   └── errorHandler.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── .env
├── server.js
├── package.json
└── Week2-Assignment.md
---
## 🚀 Getting Started

### Prerequisites

* Node.js v18+ and npm
* MongoDB (local or cloud e.g. Atlas)

### Installation

```bash
https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-Silas-Hakuzwimana.git
cd week-2-express-js-assignment-Silas-Hakuzwimana
npm install express body-parser nodemon --save-dev uuid dotenv mongoose
```

### Run the Server

```bash
# Development
npm run dev

# Production
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file and configure:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/productsmanager
API_KEY=1234
```

---

## 🔑 API Key Usage

All `/api/*` routes require an `x-api-key` header.

**Example:**

```
x-api-key: 1234
```

---

## 📦 API Endpoints

| Method | Endpoint                 | Description             | Auth Required |
| ------ | ------------------------ | ----------------------- | ------------- |
| GET    | `/api/products`        | Get all products        | ✅            |
| GET    | `/api/products/:id`    | Get product by ID       | ✅            |
| POST   | `/api/products`        | Create new product      | ✅            |
| PUT    | `/api/products/:id`    | Update existing product | ✅            |
| DELETE | `/api/products/:id`    | Delete a product        | ✅            |
| GET    | `/api/products/search` | Search by name/category | ✅            |
| GET    | /                        | Default route           | **None**     |

---

## 🧩 Features

* ✅ CRUD operations (Create, Read, Update, Delete)
* ✅ MongoDB + Mongoose integration
* ✅ API key authentication
* ✅ Request logging middleware
* ✅ Input validation
* ✅ Global error handling
* ✅ Filtering by category
* ✅ Pagination support
* ✅ Search functionality

---

## 📘 Example Request

```http


GET /
 Response:
Hello, World!

POST /api/products
Headers:
  Content-Type: application/json
  x-api-key: 1234

Body:
{
  "title": "Mouse",
  "description": "Wireless optical mouse",
  "price": 19.99,
  "category": "Accessories",
  "inStock": true
}

Response:

{
  "title": "Mouse",
  "description": "Wireless optical mouse",
  "price": 19.99,
  "category": "Accessories",
  "inStock": true,
  "_id": "6853a6fa2d038e39ea185629",
  "__v": 0
}


GET /api/products
Headers:
  Content-Type: application/json
  x-api-key: 1234

Response:
{
  "total": 23,
  "page": 1,
  "limit": 10,
  "products": [
    {
      "_id": "6853b4bdd20483cfaa6c4bd5",
      "title": "Ceramic Mug",
      "description": "Dishwasher-safe coffee mug with 350ml capacity",
      "price": 5.5,
      "category": "Kitchenware",
      "inStock": true
    },
    {
      "_id": "6853b4bdd20483cfaa6c4bd6",
      "title": "Bluetooth Speaker",
      "description": "Portable speaker with high-quality bass",
      "price": 25,
      "category": "Electronics",
      "inStock": false
    },
    {
      "_id": "6853b4bdd20483cfaa6c4bd1",
      "title": "Gaming Keyboard",
      "description": "Mechanical keyboard with RGB backlighting",
      "price": 45,
      "category": "Electronics",
      "inStock": true
    },
    {
      "_id": "6853b4bdd20483cfaa6c4bd4",
      "title": "Notebook",
      "description": "A5 size notebook with 200 ruled pages",
      "price": 2.49,
      "category": "Stationery",
      "inStock": true
    },
    {
      "_id": "6853b4bdd20483cfaa6c4bd2",
      "title": "Cotton T-Shirt",
      "description": "Soft, breathable cotton t-shirt for everyday wear",
      "price": 9.99,
      "category": "Clothing",
      "inStock": true
    },
    {
      "_id": "6853b4bdd20483cfaa6c4bd0",
      "title": "Wireless Mouse",
      "description": "A comfortable and responsive wireless mouse",
      "price": 15.99,
      "category": "Electronics",
      "inStock": true
    },
    {
      "_id": "6853a6ef2d038e39ea185627",
      "title": "Backpack",
      "description": "Water-resistant backpack with multiple compartments",
      "price": 34.95,
      "category": "Bags",
      "inStock": true,
      "__v": 0
    },
    {
      "_id": "6853a6542d038e39ea185624",
      "title": "USB-C Charger Pro",
      "description": "Upgraded 45W USB-C charger with Power Delivery",
      "price": 17.99,
      "category": "Accessories",
      "inStock": true,
      "__v": 0
    },
    {
      "_id": "6853a6fa2d038e39ea185629",
      "title": "Mouse",
      "description": "Wireless optical mouse",
      "price": 19.99,
      "category": "Accessories",
      "inStock": true,
      "__v": 0
    },
    {
      "_id": "6853b4bdd20483cfaa6c4bd3",
      "title": "Running Shoes",
      "description": "Lightweight running shoes with excellent grip",
      "price": 59.99,
      "category": "Footwear",
      "inStock": false
    }
  ]
}

PUT /api/products/6853b4bdd20483cfaa6c4bd3
Headers:
  Content-Type: application/json
  x-api-key: 1234

Body:
{
 "title": "Running Shoes",
 "description": "Lightweight running shoes with excellent grip",
 "price": 59.99,
 "category": "Footwear",
 "inStock": false
}

Response:
{
  "_id": "6853b4bdd20483cfaa6c4bd3",
  "title": "Running Shoes",
  "description": "Lightweight running shoes with excellent grip",
  "price": 59.99,
  "category": "Footwear",
  "inStock": true
}

GET /api/products/6853b4bdd20483cfaa6c4bd3
Headers:
  Content-Type: application/json
  x-api-key: 1234

Response:
{
  "_id": "6853b4bdd20483cfaa6c4bd3",
  "title": "Running Shoes",
  "description": "Lightweight running shoes with excellent grip",
  "price": 59.99,
  "category": "Footwear",
  "inStock": true
}

GET /api/products/search?query="back" 
## retrieves all items with 'back' anywhere.

Headers:
  Content-Type: application/json
  x-api-key: 1234

 Response: 
[
  {
    "_id": "6853a6ef2d038e39ea185627",
    "title": "Backpack",
    "description": "Water-resistant backpack with multiple compartments",
    "price": 34.95,
    "category": "Bags",
    "inStock": true,
    "__v": 0
  },
  {
    "_id": "6853b4bdd20483cfaa6c4bd1",
    "title": "Gaming Keyboard",
    "description": "Mechanical keyboard with RGB backlighting",
    "price": 45,
    "category": "Electronics",
    "inStock": true
  },
  {
    "_id": "6853b4bdd20483cfaa6c4bda",
    "title": "Backpack",
    "description": "Water-resistant backpack with multiple compartments",
    "price": 29.99,
    "category": "Bags",
    "inStock": true
  }
]

GET /api/products/search?query="backpack" 
## retrieves all items with name 'backpack'.

Headers:
  Content-Type: application/json
  x-api-key: 1234

Response:

[
  {
    "_id": "6853a6ef2d038e39ea185627",
    "title": "Backpack",
    "description": "Water-resistant backpack with multiple compartments",
    "price": 34.95,
    "category": "Bags",
    "inStock": true,
    "__v": 0
  }
]

GET /api/products/search?query="accessories" 
## retrieves all items with category 'accessories'.

Headers:
  Content-Type: application/json
  x-api-key: 1234

Response: 
[
  {
    "_id": "6853a6542d038e39ea185624",
    "title": "USB-C Charger Pro",
    "description": "Upgraded 45W USB-C charger with Power Delivery",
    "price": 17.99,
    "category": "Accessories",
    "inStock": true,
    "__v": 0
  },
  {
    "_id": "6853a6fa2d038e39ea185629",
    "title": "Mouse",
    "description": "Wireless optical mouse",
    "price": 19.99,
    "category": "Accessories",
    "inStock": true,
    "__v": 0
  },
  {
    "_id": "6853b4bdd20483cfaa6c4bd8",
    "title": "Mouse",
    "description": "Wireless optical mouse",
    "price": 19.99,
    "category": "Accessories",
    "inStock": true
  },
  {
    "_id": "6853b4bdd20483cfaa6c4bd9",
    "title": "Smartphone Stand",
    "description": "Adjustable stand for smartphones and tablets",
    "price": 7.99,
    "category": "Accessories",
    "inStock": true
  },
  {
    "_id": "6853b4bdd20483cfaa6c4be0",
    "title": "Sunglasses",
    "description": "UV400 protection polarized sunglasses",
    "price": 10.99,
    "category": "Accessories",
    "inStock": false
  }
]

```

---

## ⚠️ Error Responses

| Status | Message           |
| ------ | ----------------- |
| 400    | Validation failed |
| 401    | Missing API Key   |
| 403    | Invalid API Key   |
| 404    | Product not found |
| 500    | Server error      |

---

## 👨‍💻 Author

* *Silas Hakuzwimana [hakuzwisilas@gmail.com]*

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
