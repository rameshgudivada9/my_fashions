const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(cors());


app.use(express.json());
const productController = require("./controllers/product.controllers");
const cartController = require("./controllers/cartController");    
const wishlistController = require("./controllers/wishlistController")
const userController=require("./controllers/userController")
app.use("/",productController);
app.use("/cartData", cartController);
app.use("/wishlistData", wishlistController);
app.use("/user",userController)





module.exports = app;