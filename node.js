import express from 'express';
import dotenv from 'dotenv';
import connectdb from "./config/db.js";
import userRoutes from "./routes/user.router.js";
import recordRoutes from "./routes/user.record.js";
import dashboardRoutes from "./routes/user.dashboard.js";
import rateLimit from "express-rate-limit";
dotenv.config();
connectdb(); 

const app= express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

app.use('/api/auth',userRoutes);
app.use('/api/records',recordRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.get('/',(req,res)=>{
    res.send('Hello World');
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100 
});

app.use(limiter);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message || "Internal Server Error"
  });
});

