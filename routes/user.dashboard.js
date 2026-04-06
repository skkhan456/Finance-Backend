import express from "express";
const router = express.Router();

import {
  getSummary,
  getCategoryBreakdown,
  getMonthlyAnalysis
} from "../controllers/dashboard.controller.js";

import { isAuth } from "../middlewares/isAuth.js";
import { authorized } from "../middlewares/authorize.js";

router.get("/summary", isAuth, authorized("admin", "analyst"), getSummary);

router.get("/category", isAuth, authorized("admin", "analyst"), getCategoryBreakdown);

router.get("/monthly", isAuth, authorized("admin", "analyst"), getMonthlyAnalysis);

export default router;