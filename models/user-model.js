import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password should be atleast 8 characters']

    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["admin", "customer", "superAdmin"],
        default: null
    },
    // image :{
    //     type: [String],
     
    // }
},
    // hash password
    {
        timestamps: true
    })
let user = mongoose.model("User", userSchema)

export default user;