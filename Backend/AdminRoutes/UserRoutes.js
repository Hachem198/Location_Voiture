import express from "express";
import { userSignup } from "../controllers/authControllers.js";
import { userlogin } from "../controllers/authControllers.js";
const router = express.Router();
router.post("/signup", userSignup);
router.post("/login", userlogin);
export default router;
