import Order from "../models/order-model.js";

export const addOrder = async (req,res) => {
    try {
        const { user, products ,total,status } = req.body;
        console.log (user,products,total,status);
        // Check if customer Order exists
        const OrderExisted = await Order.findOne({ name :name });
        if (OrderExisted) {
            return res.status(400).json({ message: "Order for this customer already exists" });
        }
        const newOrder = new Order({ customerId, products });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getAllOrders = async (req,res) => {
    try {
        const orders = await Order.find();
        res.status(200).json({ success: true, orders });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getOrderById = async (req,res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.status(200).json(order);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateOrderStatus = async (req,res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.status(200).json(order);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteOrder = async (req,res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.status(200).json({ message: "Order deleted successfully" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}




