import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config()
const app = express()

// middleware

app.use(express.json())
app.use(cors())

app.use("/api", taskRoutes);

// mongodb Connection

mongoose
        .connect(process.env.MONGO_URI)
        .then(()=>console.log("mongodb connected"))
        .catch((err)=>console.error(err))

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))

export default app