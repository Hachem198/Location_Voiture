import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import CarNoReserveButton from "../components/CarNoReserveButton";
import axios from "axios";
export const ReserveCar = () => {
  const location = useLocation();
  const id = location.state.id;
  const [car, setCar] = useState(null);
  useEffect(() => {
    axios
      .post(`http://localhost:3000/reserve/car/${id}`, { id })
      .then((res) => {
        setCar(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!car) {
    return <div>Car not found</div>;
  }
  return (
    <div>
      <div className="bg-[url('C:\Users\ezrea\Desktop\Location_Voiture-main\Frontend\src\assets\imgs\CarsPagePhoto.jpg')] relative min-h-screen bg-center bg-cover bg-fixed">
        <Navbar></Navbar>
        <div className="flex justify-center items-center mt-6">
          <CarNoReserveButton
            key={car.id}
            model={car.model}
            type={car.type}
            transmission={car.transmission}
            nombreSiege={car.nombreSiege}
            prixParJour={car.prixParJour}
            imgUrl={car.imgUrl}
            climatisation={car.climatisation}
          ></CarNoReserveButton>
        </div>
        <div></div>
      </div>
    </div>
  );
};
