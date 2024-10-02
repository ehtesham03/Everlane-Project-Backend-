import category from "../models/category-model.js";


export const addcategory = async (req,res) =>{
    try{
        const {name,description,products}=req.body;
        console.log(name,description),products;
        const isCategoryExisted = await category.findOne({name:name})
        if(isCategoryExisted){
            return res.status(400).json({message:"Category Existed"} )
        }
        const newCategory = new category({name,description,products});
        await newCategory.save();
        res.status(201).json({message:"Category Added Successfully", newCategory});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}

export const getAllCategories = async (req,res) =>{
    try{
        const categoriesData = await category.find();
        res.status(200).json({success:true, categoriesData});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}

export const getCategoryByProduct = async(req,res) =>{
    try{
        const categoryData = await category.find().populate("products").populate("user")
        res.status(200).json({success:true, categoryData});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}