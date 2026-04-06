import express from 'express';
const router = express.Router();
import { createRecord, getRecords, getRecordById, updateRecord, deleteRecord } from "../controllers/record.controller.js";
import { isAuth } from "../middlewares/isAuth.js";
import { authorized } from "../middlewares/authorize.js";

router.post("/create", isAuth, authorized("admin"), createRecord);
router.get("/list", isAuth, authorized("admin"), getRecords);
router.get("/view/:id", isAuth, authorized("admin"), getRecordById);
router.put("/update/:id", isAuth, authorized("admin"), updateRecord);
router.delete("/delete/:id", isAuth, authorized("admin"), deleteRecord);

export default router;