import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    products :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    user :{
          type: mongoose.Schema.Types.ObjectId,
        ref: "User"

    }
})
let category = mongoose.model('Category',categorySchema);

export default category;