import mongoose from "mongoose";

const PaymentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentDate: {
        type: Date,
        default: Date.now,
    },
    order :{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true,
    },
})
    let Payment = mongoose.model("Payment",PaymentSchema)
    export default Payment;

