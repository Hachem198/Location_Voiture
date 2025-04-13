import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Car from "../components/Car";
import { useLocation } from "react-router-dom";
import axios from "axios";
import AvailableCar from "../components/AvailableCar";
const ReservationCars = () => {
  const [availableCars, setAvailableCars] = useState([]);
  const location = useLocation();
  const pickUpDate = location.state.pickUpDate;
  const returnDate = location.state.returnDate;
  JSON.stringify(location.state.pickUpDate);
  const formatDateTime = (date) => {
    return date.toLocaleString(); // This will include both date and time
  };
  useEffect(() => {
    axios
      .post(`http://localhost:3000/reserve/available-cars`, {
        pickUpDate,
        returnDate,
      })
      .then((res) => {
        setAvailableCars(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    console.log(availableCars);
  }, [availableCars]);
  return (
    <div>
      <div className="bg-[url('C:\Users\ezrea\Desktop\Location_Voiture-main\Frontend\src\assets\imgs\CarsPagePhoto.jpg')] relative min-h-screen bg-center bg-cover bg-fixed">
        <Navbar></Navbar>
        <div className="border w-[600px] h-[150px] m-4">
          <h1 className="text-white pl-1">
            Pick-Up Location: {location.state.pickUpLocation.label}
          </h1>
          <h1 className="text-white pl-1">
            Pick-Up Date&Time: {formatDateTime(location.state.pickUpDate)}
          </h1>
          <h1 className="text-white pl-1">
            return Date&Time: {formatDateTime(location.state.returnDate)}
          </h1>
          <h1 className="text-white pl-1">
            Drop-off Location: {location.state.returnLocation.label}
          </h1>
        </div>
        <div>
          {availableCars.map((car, i) => {
            return (
              <AvailableCar
                key={car.id}
                id={car.id}
                model={car.model}
                type={car.type}
                transmission={car.transmission}
                nombreSiege={car.nombreSiege}
                prixParJour={car.prixParJour}
                imgUrl={car.imgUrl}
                climatisation={car.climatisation}
              ></AvailableCar>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReservationCars;
