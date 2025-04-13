import React, { useEffect, useState } from "react";
import SearchSpace from "../components/SearchSpace/SearchSpace";
import Car from "../components/Car";
import Usegetcars from "../components/Use-get-cars";
import { IoHomeSharp } from "react-icons/io5";
import Navbar from "../components/Navbar";
import FindCar from "../components/FindCar";
import useGetfiltredCar from "../components/Use-get-filtredCar";
const Cars = () => {
  const [checkedCarTypes, setCheckedCarTypes] = useState([]);
  const [checkedCarSeats, setCheckedCarSeats] = useState([]);
  const [checkedCarTransmission, setCheckedCarTransmission] = useState([]);
  const [numCheckedCarSeats, setNumCheckedCarSeats] = useState([]);
  const cars = Usegetcars();
  const filtredCars = useGetfiltredCar({
    checkedCarTypes,
    numCheckedCarSeats,
    checkedCarTransmission,
    cars,
  });
  return (
    <div>
      <div className="bg-[url('C:\Users\ezrea\Desktop\Location_Voiture-main\Frontend\src\assets\imgs\CarsPagePhoto.jpg')] relative min-h-screen bg-center bg-cover bg-fixed">
        <div className=" inset-0 bg-black bg-opacity-40 ">
          <Navbar></Navbar>
          <div className="p-12">
            <h1
              className="text-white flex justify-center  text-4xl mb-6
          "
            >
              Find cars to rent at the best prices
            </h1>
            <SearchSpace></SearchSpace>
          </div>
          <FindCar
            checkedCarTypes={checkedCarTypes}
            setCheckedCarTypes={setCheckedCarTypes}
            checkedCarSeats={checkedCarSeats}
            setCheckedCarSeats={setCheckedCarSeats}
            checkedCarTransmission={checkedCarTransmission}
            setCheckedCarTransmission={setCheckedCarTransmission}
            numCheckedCarSeats={numCheckedCarSeats}
            setNumCheckedCarSeats={setNumCheckedCarSeats}
          ></FindCar>
          <div className="grid grid-cols-3 gap-4 mt-16 ml-32">
            {filtredCars.map((car, i) => {
              return (
                <Car
                  key={car.id}
                  model={car.model}
                  type={car.type}
                  transmission={car.transmission}
                  nombreSiege={car.nombreSiege}
                  prixParJour={car.prixParJour}
                  imgUrl={car.imgUrl}
                  climatisation={car.climatisation}
                ></Car>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
