import Payment from "../models/payment-model.js";


export const addPayment = async (req,res) => {
    try {
        const { user, amount, paymentMethod } = req.body;
        console.log(user, amount, paymentMethod);
        // Check if payment exists
        const paymentExisted = await Payment.findOne({ user :user });
        if (paymentExisted) {
            return res.status(400).json({ message: "Payment for this customer already exists" });
        }
        const newPayment = new Payment({ user, amount, paymentMethod });
        await newPayment.save();
        res.status(201).json({ success: true, newPayment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
 
}

export const getPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) return res.status(404).json({ message: "Payment not found" });
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updatePayment = async (req, res) => {
    try {
        const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!payment) return res.status(404).json({ message: "Payment not found" });
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deletePayment = async (req, res) => {
    try {
        const payment = await Payment.findByIdAndDelete(req.params.id);
        if (!payment) return res.status(404).json({ message: "Payment not found" });
        res.status(200).json({ message: "Payment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
