import express from "express";
import cors from "cors";
import VoitureRoutes from "./AdminRoutes/VoitureRoutes.js";
import UserRoutes from "./AdminRoutes/UserRoutes.js";
import cookieParser from "cookie-parser";
import SearchSpaceRoutes from "./UserRoutes/SearchSpaceRoutes.js";
import ReserveRoutes from "./UserRoutes/ReserveRoutes.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/admin", VoitureRoutes);
app.use("/admin", UserRoutes);
app.use("/reserve", SearchSpaceRoutes);
app.use("/reserve", ReserveRoutes);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.listen(3000, () => {
  console.log("server is working !!");
});
