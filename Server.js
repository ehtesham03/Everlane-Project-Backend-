import express from "express"
import bodyParser from "body-parser"
 import cors from "cors"
 import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import UserRoute from "./routes/userRoutes.js";
import ProductRoute from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import regRouter from "./routes/registerRoute.js";
import OrderRoute from "./routes/orderRoute.js";
import PaymentRoute from "./routes/paymentRoute.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";



 dotenv.config();
 
 const app = express();
//for connections
 app.use(cors());
 // for json data
 app.use(express.json());
// for server Images Storage

// const _dirname = path.dirname(_dirname);
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.use('/uploads', express.static(path.join(__dirname, 'upload')));
// body parser for taking data from body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//cookie-Parser

app.use(cookieParser())

//routes for Postman
app.use("/",UserRoute)
app.use("/",ProductRoute)
app.use("/",categoryRoutes);
app.use('/',regRouter);
app.use('/',OrderRoute);
app.use('/',PaymentRoute)

const port = process.env.PORT || 5000;
connectDB ();

app.listen(port,()=>{
    console.log("Server Created Successfully")
})
