import { request } from 'http';
import { response } from 'express';
import products from "../models/product-model.js";


export const createProduct = async (req, res) => {

    try {
        const { name, price, description, quantity, 
            // user 
        } = req.body;

        const images = req.files && req.files.length > 0 ? req.files.map(file => file.filename) : [];

        console.log(name, price, description, quantity);
        const isProductExisted = await products.findOne({ name: name })

        if (isProductExisted) {
            return res.status(400).json({ message: "Product Existed" })
        }
        const newProduct = new products({
            name: name,
            price: price,
            description: description,
            quantity: quantity,
            // user: user,
            images: images
        });
        await newProduct.save();
        res.status(200).json({ message: "Data Successfully Saved", success: true, newProduct })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const productsData = await products.find();
        res.status(200).json({ success: true, productsData });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const product = await products.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product Not Found" })
        }
        res.status(200).json({ message: "Product Successfully Deleted", success: true, deletedProduct: product })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const UpdateProduct = async (req, rea) => {
    try {
        const product = await products.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) {
            return res.status(404).json({ message: "Product Not Found" })
        }
        res.status(200).json({ message: "Product Successfully Updated", success: true, updatedProduct: product })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const getproductByUser = async (req, res) => {
    try {
        const productsData = await products.find().populate("user");
        res.status(200).json({ success: true, productsData });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}