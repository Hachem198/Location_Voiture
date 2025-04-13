import React from "react";

const useGetfiltredCar = ({
  checkedCarTypes,
  numCheckedCarSeats,
  checkedCarTransmission,
  cars,
}) => {
  let filtredCars = cars;
  if (checkedCarTypes?.length) {
    filtredCars = cars.filter((car) => checkedCarTypes.includes(car.type));
  }
  if (numCheckedCarSeats?.length) {
    filtredCars = filtredCars.filter((car) => {
      console.log({ numCheckedCarSeats });
      numCheckedCarSeats.includes(4);
      console.log(`${car.nombreSiege}`);
    });
  }
  if (checkedCarTransmission?.length) {
    filtredCars = filtredCars.filter((car) =>
      checkedCarTransmission.includes(car.transmission)
    );
  }
  return filtredCars;
};

export default useGetfiltredCar;
