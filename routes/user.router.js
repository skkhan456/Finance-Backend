import express from "express";
const router = express.Router();
import User from "../models/user.js";
import { signUp, login, getAllUsers, updateUserRole, updateUserStatus } from "../controllers/user.controller.js";
import { isAuth } from "../middlewares/isAuth.js";
import { authorized } from "../middlewares/authorize.js";   

router.post("/signup", signUp);
router.post("/login", login);  

router.get("/users", isAuth, authorized("admin"), getAllUsers);

router.patch("/users/:id/role", isAuth, authorized("admin"), updateUserRole);

router.patch("/users/:id/status", isAuth, authorized("admin"), updateUserStatus);

router.get("/users/search", async (req, res) => {
  const query = req.query.q;

  const users = await User.find({
    name: { $regex: query, $options: "i" }
  });

  res.json(users);
});

router.delete("/user/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, {
    isDeleted: true
  });

  res.json({ msg: "User soft deleted" });
});

export default router;