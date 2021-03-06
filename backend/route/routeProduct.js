const express= require('express');
const product= require('../controllers/Product.controller');
const route = express.Router();
route.get("/product",product.listProduct);
route.get("/product/:id",product.ProductSouCategorie);
route.post("/addProduct",product.Add);
route.delete("/removeAll",product.removeAll);
route.patch("/updateProduit/:id",product.UpdateProduct);

route.get("/productDetails/:id",product.productDetail);
module.exports=route;