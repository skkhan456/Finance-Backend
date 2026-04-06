import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./models/user.js";
import dotenv from "dotenv";

dotenv.config();

const createAdmin = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await User.create({
    name: "Admin",
    email: "admin@gmail.com",
    password: hashedPassword,
    role: "admin"
  });

  console.log("Admin created:", admin);
  process.exit();
};

createAdmin();