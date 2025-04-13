import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateCar from "./admin/pages/CreateCar";
import DeleteCar from "./admin/pages/DeleteCar";
import EditCar from "./admin/pages/EditCar";
import AdminHome from "./admin/pages/AdminHome";
import ShowCar from "./admin/pages/ShowCar";
import Home from "./User/Pages/Home";
import Cars from "./User/Pages/Cars";
import ReservationCars from "./User/Pages/ReservationCars";
import Signup from "./admin/pages/Signup";
import { Toaster } from "react-hot-toast";
import Login from "./admin/pages/login";
import { ReserveCar } from "./User/Pages/ReserveCar";
function App() {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{ duration: 2000 }}
      ></Toaster>
      <Routes>
        <Route path="/admin/cars" element={<AdminHome></AdminHome>}></Route>
        <Route
          path="/admin/cars/create"
          element={<CreateCar></CreateCar>}
        ></Route>
        <Route
          path="/admin/cars/details/:id"
          element={<ShowCar></ShowCar>}
        ></Route>
        <Route
          path="/admin/cars/edit/:id"
          element={<EditCar></EditCar>}
        ></Route>
        <Route
          path="/admin/cars/delete/:id"
          element={<DeleteCar></DeleteCar>}
        ></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/cars" element={<Cars></Cars>}></Route>
        <Route
          path="/reserve/cars"
          element={<ReservationCars></ReservationCars>}
        ></Route>
        <Route path="/admin/signup" element={<Signup></Signup>}></Route>
        <Route path="/admin/login" element={<Login></Login>}></Route>
        <Route
          path="/reserve/car/:id"
          element={<ReserveCar></ReserveCar>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
