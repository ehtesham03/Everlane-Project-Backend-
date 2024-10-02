import mongoose from "mongoose";


const cartSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        quantity: { type: Number, required: true }
    }],
    totalPrice:{
        type: Number,
        required: true
    },
    totalItems:{
        type: Number,
        required: true
    },

 
})

let cart = mongoose.model('Cart', cartSchema);

export default cart;