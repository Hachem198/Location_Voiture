import express from "express";
const router = express.Router();
import { ShowCars } from "../controllers/ReserveControllers.js";
import { ReserveCar } from "../controllers/ReserveControllers.js";
router.post("/available-cars", ShowCars);
router.post("/car/:id", ReserveCar);
export default router;
