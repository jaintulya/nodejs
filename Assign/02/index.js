const express = require("express");
const app = express();
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3,
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4,
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1,
  },
];


app.get("/products", (req, res) => {
  res.status(200).json(products);
});


app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    res.status(404).json({
      message: "Id not found ",
    });
  } else {
    res.status(200).json(product);
  }
  res.status(200).json(products);
});


app.get("/products/category/:categoryName", (req, res) => {
  const cat = req.params.categoryName;
  const category = products.filter((cate) => cate.category === cat);
  if (category) {
    res.status(200).json(category);
  } else {
    res.status(200).json;
  }
});


app.post("/products", (req, res) => {
  const newproduct = {
    id: products.length + 1,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating,
  };
  products.push(newproduct);
  res.status(201).json(newproduct);
});


app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const Index = products.findIndex((p) => p.id === id);

  if (Index === -1) {
    res.status(404).json();
  } else {
    products[Index] = {
      id: req.params.id,
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      stock: req.body.stock,
      rating: req.body.rating,
    };
    res.status(200).json({
      Message: "updated succesfully",
    });
  }
});


app.put("/products/:id/stock", (req, res) => {
  const id = parseInt(req.params.id);

  const Index = products.findIndex((p) => p.id === id);

  if (Index === -1) {
    res.status(404).json();
  } else {
    products[Index].stock = req.body.stock;
    res.status(200).json (products[Index]);
  }
});



app.put("/products/:id/price", (req, res) => {
  const id = parseInt(req.params.id);

  const Index = products.findIndex((p) => p.id === id);

  if (Index === -1) {
    res.status(404).json();
  } else {
    products[Index].price = req.body.price;
    res.status(200).json(products[Index]);
  }
});

app.listen(3000, () => {
  console.log("server start on port 3000");
});
