import express from 'express';
import { addcategory, getAllCategories, getCategoryByProduct } from '../controllers/category.js';


const categoryRoutes = express.Router()

categoryRoutes.post('/addCategory',addcategory)
categoryRoutes.get('/getallCategory',getAllCategories)
categoryRoutes.get('/getcategorybyProduct',getCategoryByProduct)


export default categoryRoutes;