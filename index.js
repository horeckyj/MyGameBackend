import config from "./config/database.js";
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import roleRoute from './rotes/role.js';
import authRoute from './rotes/auth.js';
import userRoute from './rotes/user.js';
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));
app.use("/api/role", roleRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

// Response Handler Middleware
app.use((obj, req, res, next)=>{
  const statusCode = obj.status || 500;
  const message = obj.message || "Something went wrong!";
  return res.status(statusCode).json({
    success: [200,201,204].some(a=> a === obj.status) ? true : false,
    status: statusCode,
    message: message,
    data: obj.data,
  });
});

// Connected To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database: " + config.database);
});

// On Error
mongoose.connection.on("error", (err) => {
  console.log("Connected error: " + err);
});

// Port Number
const port = 3000;

//Start Server
app.listen(port, () => {
  console.log("Server started on port: " + port);
});