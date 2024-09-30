const express = require("express");
require("dotenv").config();
const category = require('./routes/category');
const products = require('./routes/products');
const ingredients = require('./routes/ingredients');
const app = express();

app.use(express.json());

app.use('/categories', category);
app.use('/products', products);
app.use('/ingredients', ingredients);

app.listen( process.env.PORT || 3000, ()=> {
    console.log("Server ayakta");
});