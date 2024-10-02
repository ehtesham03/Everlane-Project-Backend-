import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type :String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"  ,

      
    },
    
})
let products = mongoose.model("Product",productSchema);

export default products;
