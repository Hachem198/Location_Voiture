import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
const FindCar = ({
  checkedCarSeats,
  setCheckedCarSeats,
  checkedCarTransmission,
  setCheckedCarTransmission,
  checkedCarTypes,
  setCheckedCarTypes,
  numCheckedCarSeats,
  setNumCheckedCarSeats,
}) => {
  useEffect(() => {
    setNumCheckedCarSeats(
      checkedCarSeats.map((carseat) => {
        return Number(carseat[0]);
      })
    );
    if (checkedCarSeats.length == 0) {
      setNumCheckedCarSeats([]);
    }
  }, [checkedCarSeats]);
  const [apearOptions, setApearOptions] = useState(true);
  const [deleteButton, setDeleteButton] = useState(false);
  const [openCarType, setOpenCarType] = useState(false);
  const [carTypes, setCarTypes] = useState(["Sedan", "SUV", "4X4", "Sport"]);
  const [openCarSeat, setOpenCarSeat] = useState(false);
  const [carSeats, setCarSeats] = useState([
    "2 Seats",
    "3 Seats",
    "4 Seats",
    "5 Seats",
    "6 Seats",
    "7 Seats",
    "8 Seats",
  ]);
  const [openCarTransmission, setOpenCarTransmission] = useState(false);
  const [carTransmission, setCarTransmission] = useState([
    "Manual",
    "Automatic",
  ]);
  const handleCarTypesCheckboxChange = (cartype) => {
    if (checkedCarTypes.includes(cartype)) {
      setCheckedCarTypes(checkedCarTypes.filter((i) => i !== cartype));
    } else {
      setCheckedCarTypes((c) => [...c, cartype]);
    }
  };
  const handleCarSeatsCheckboxChange = (carSeat) => {
    if (checkedCarSeats.includes(carSeat)) {
      setCheckedCarSeats(checkedCarSeats.filter((i) => i !== carSeat));
    } else {
      setCheckedCarSeats((c) => [...c, carSeat]);
    }
  };
  const handleCarTransmissionCheckboxChange = (t) => {
    if (checkedCarTransmission.includes(t)) {
      setCheckedCarTransmission(checkedCarTransmission.filter((i) => i !== t));
    } else {
      setCheckedCarTransmission((c) => [...c, t]);
    }
  };
  const HandleOpenCarType = () => {
    setOpenCarType(!openCarType);
    if (openCarSeat) {
      setOpenCarSeat(!openCarSeat);
    }
    if (openCarTransmission) {
      setCarTransmission(!openCarTransmission);
    }
  };
  const HandleOpenCarSeat = () => {
    setOpenCarSeat(!openCarSeat);
    if (openCarType) {
      setOpenCarType(!openCarType);
    }
    if (openCarTransmission) {
      setOpenCarTransmission(!openCarTransmission);
    }
  };
  const HandleOpenTransmission = () => {
    setOpenCarTransmission(!openCarTransmission);
    if (openCarSeat) {
      setOpenCarSeat(!openCarSeat);
    }
    if (openCarType) {
      setOpenCarType(!openCarType);
    }
  };
  const HandleDeleteButton = () => {
    setCheckedCarSeats([]);
    setCheckedCarTransmission([]);
    setCheckedCarTypes([]);
  };
  useEffect(() => {
    if (
      checkedCarSeats.length >= 1 ||
      checkedCarTransmission.length >= 1 ||
      checkedCarTypes.length >= 1
    ) {
      setDeleteButton(true);
      setApearOptions(true);
    } else {
      setDeleteButton(false);
      setApearOptions(false);
    }
  }, [checkedCarSeats, checkedCarTransmission, checkedCarTypes]);
  return (
    <div>
      {apearOptions && (
        <div className="flex justify-center">
          {checkedCarTypes.map((cartype, i) => (
            <div
              key={i}
              className="border border-white w-[100px] rounded-lg mb-2 flex h-[23px]  justify-between"
            >
              <h3 className="text-white">{cartype}</h3>
              <button onClick={() => handleCarTypesCheckboxChange(cartype)}>
                <MdCancel className="text-white mt-1" />
              </button>
            </div>
          ))}
          {checkedCarSeats.map((carseat, i) => (
            <div
              key={i}
              className="border border-white w-[100px] rounded-lg mb-2 flex h-[23px]  justify-between"
            >
              <h3 className="text-white">{carseat}</h3>
              <button onClick={() => handleCarSeatsCheckboxChange(carseat)}>
                <MdCancel className="text-white mt-1" />
              </button>
            </div>
          ))}
          {checkedCarTransmission.map((cartransmission, i) => (
            <div
              key={i}
              className="border border-white w-[100px] rounded-lg mb-2 flex h-[23px]  justify-between"
            >
              <h3 className="text-white">{cartransmission}</h3>
              <button
                onClick={() =>
                  handleCarTransmissionCheckboxChange(cartransmission)
                }
              >
                <MdCancel className="text-white mt-1" />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="relative flex justify-center">
        <div className="h-[40px] w-[600px] border-2 rounded-lg flex">
          <div className="text-white w-[200px] h-full justify-center flex flex-wrap border-r-2 border-white ">
            <button onClick={HandleOpenCarType} className="h-full">
              Car type
            </button>
            {openCarType && (
              <ul className=" border-2 border-white border-t-0  w-full">
                {carTypes.map((cartype, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 mb-2  "
                  >
                    <input
                      type="checkbox"
                      id={`checkbox-${index}`}
                      className="form-checkbox h-4 w-4  text-white"
                      checked={checkedCarTypes.includes(cartype)}
                      onChange={() => handleCarTypesCheckboxChange(cartype)}
                    />
                    <label htmlFor={`checkbox-${index}`} className="text-white">
                      {cartype}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="text-white w-[200px] h-full flex flex-wrap border-r-2 border-white justify-center ">
            <button onClick={HandleOpenCarSeat} className="h-full">
              Car Seats
            </button>
            {openCarSeat && (
              <ul className=" border-2 border-white border-t-0  w-full">
                {carSeats.map((carseat, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 mb-2  "
                  >
                    <input
                      type="checkbox"
                      id={`checkbox-${index}`}
                      className="form-checkbox h-4 w-4  text-white"
                      checked={checkedCarSeats.includes(carseat)}
                      onChange={() => handleCarSeatsCheckboxChange(carseat)}
                    />
                    <label htmlFor={`checkbox-${index}`} className="text-white">
                      {carseat}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="text-white w-[200px] h-full flex flex-wrap  justify-center ">
            <button onClick={HandleOpenTransmission} className="h-full">
              Transmission
            </button>
            {openCarTransmission && (
              <ul className=" border-2 border-white border-t-0  w-full">
                {carTransmission.map((cart, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 mb-2  "
                  >
                    <input
                      type="checkbox"
                      id={`checkbox-${index}`}
                      className="form-checkbox h-4 w-4  text-white"
                      checked={checkedCarTransmission.includes(cart)}
                      onChange={() => handleCarTransmissionCheckboxChange(cart)}
                    />
                    <label htmlFor={`checkbox-${index}`} className="text-white">
                      {cart}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {deleteButton && (
          <div className="ml-3 mt-1 border-2">
            <button
              className="text-white w-[100px] h-[30px]"
              onClick={HandleDeleteButton}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindCar;
