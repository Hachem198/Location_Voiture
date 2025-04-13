import express from "express";
import { CarSearch } from "../controllers/SearchSpaceController.js";
const router = express.Router();
router.post("/cars", CarSearch);
export default router;
