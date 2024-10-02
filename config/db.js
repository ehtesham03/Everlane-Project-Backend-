import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url= process.env.MONGOURL

export const connectDB = ()=>{
    try{
        mongoose.connect(url).then(()=>{
        console.log("MongoDB Connected Successfully...");
    })
}

    catch(err){
        console.error(err.message);
      
    }
}
