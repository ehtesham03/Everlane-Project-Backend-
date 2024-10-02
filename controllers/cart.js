import cart from '../models/cart-model.js';

export const createCart = async (req, res) => {
    try {
        const { userId } = req.body;
        const cartData = await cart.findOne({ userId });
        if (cartData) {
            return res.status(400).json({ message: "Cart Existed" })
        }
        const newCart = new cart({ userId });
        await newCart.save();
        res.status(201).json({ success: true, cartData: newCart });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}