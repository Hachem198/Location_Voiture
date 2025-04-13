import React, { useEffect, useState } from "react";
import PickUpPlacesAutocomplete from "./PickUpPlacesAutocomplete";
import PickUpDateTime from "./PickUpDateTime";
import ReturnDateTime from "./ReturnDateTime";
import ReturnLocation from "./ReturnLocation";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SearchSpace = () => {
  //search
  const [location, setLocation] = useState(false);
  const [pickUpDate, setPickUpDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState(pickUpLocation);
  const handleLocationChange = () => {
    setLocation((l) => !l);
  };
  useEffect(() => {
    if (!location) {
      setReturnLocation(pickUpLocation);
    }
  }, [pickUpLocation]);
  const navigate = useNavigate();
  const handleSearch = () => {
    const searchprops = {
      pickUpLocation,
      pickUpDate,
      returnLocation,
      returnDate,
    };
    axios
      .post("http://localhost:3000/reserve/cars", searchprops)
      .then((res) => {
        if (res.data.error) {
          toast.error(res.data.error);
        } else {
          toast.success("welcome");
          navigate("/reserve/cars", {
            replace: true,
            state: {
              pickUpDate,
              returnDate,
              pickUpLocation,
              returnLocation,
            },
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-[1000px] h-[250px] border-4 border-white m-auto mt-8 ">
      <div className="flex">
        <PickUpPlacesAutocomplete
          pickUpLocation={pickUpLocation}
          setPickUpLocation={setPickUpLocation}
        ></PickUpPlacesAutocomplete>
        {location && (
          <ReturnLocation
            returnLocation={returnLocation}
            setReturnLocation={setReturnLocation}
            pickUpLocation={pickUpLocation}
          ></ReturnLocation>
        )}
        <PickUpDateTime
          pickUpDate={pickUpDate}
          setPickUpDate={setPickUpDate}
        ></PickUpDateTime>
        <ReturnDateTime
          returnDate={returnDate}
          setReturnDate={setReturnDate}
        ></ReturnDateTime>
        <button
          className="text-white border-2 border-white rounded-lg h-[40px] w-[100px] mt-[80px] ml-auto mr-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="ml-4 mt-[40px]">
        <input
          type="checkbox"
          checked={location}
          onChange={handleLocationChange}
        />
        <label className="text-white">Drop car off at different location</label>
      </div>
    </div>
  );
};

export default SearchSpace;
