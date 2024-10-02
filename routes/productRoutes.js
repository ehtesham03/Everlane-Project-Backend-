import express from "express";
import { createProduct, deleteProduct, getAllProducts, getproductByUser, UpdateProduct } from "../controllers/product.js";
import uploads from "../utils/produt-Images.js";


const ProductRoute = express.Router();
ProductRoute.post('/addProduct',uploads.array('images',10), createProduct)
ProductRoute.get('/getProducts',getAllProducts)
ProductRoute.delete('/deleteProduct/:id', deleteProduct)
ProductRoute.put('/updateProduct/:id', UpdateProduct)
ProductRoute.get('/getProductbyUser',getproductByUser)




export default ProductRoute;