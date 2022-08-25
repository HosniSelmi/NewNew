import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import usersRoute from "./routes/user.js";
import servicesRoute from "./routes/service.js";
import authRoute from "./routes/auth.js";
import bodyParser from 'body-parser'

const app=express()
dotenv.config()

app.use(bodyParser.json());
app.use(express.json())

const connect =async()=>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log('connected to db')
  } catch (error) {
    throw(error);
  }
}
app.use("/api/users", usersRoute);
app.use("/api/services", servicesRoute);
app.use("/api",authRoute);

app.listen(8800,()=>{
    connect();
    console.log("hi");
})