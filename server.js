const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");
 
const app = express();

const port = process.env.PORT || 3000;
 
// Middlewares

app.use(cors());

app.use(bodyParser.json());
 
// Sample data

let products = [

  { id: 1, name: "Laptop", price: 1200 },

  { id: 2, name: "Headphones", price: 150 },

  { id: 3, name: "Keyboard", price: 80 },

];
 
let cart = [];
 
// Routes

app.get("/", (req, res) => {

  res.send("🛍️ Welcome to Stanley's E-Commerce Store API!");

});
 
app.get("/products", (req, res) => {

  res.json(products);

});
 
app.post("/cart", (req, res) => {

  const product = req.body;

  if (!product || !product.id) {

    return res.status(400).json({ message: "Invalid product data" });

  }

  cart.push(product);

  res.json({ message: "Product added to cart", cart });

});
 
app.get("/cart", (req, res) => {

  res.json(cart);

});
 
app.listen(port, () => {

  console.log(`🛒 Server running at http://localhost:${port}`);

});
