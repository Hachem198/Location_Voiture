import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import reactSelect from "react-select";
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    color: "white",
  }),
  option: (provided) => ({ ...provided }),
};
const ReturnLocation = ({
  returnLocation,
  setReturnLocation,
  pickUpLocation,
}) => {
  return (
    <div className="w-[220px] ml-2 mt-[58px]">
      <h1 className="flex justify-center text-white">Drop-off Location :</h1>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyCn9Dv4RNL9q9itbYrPrKIYwAltOnXMPy4"
        selectProps={{
          styles: customStyles,
          returnLocation,
          onChange: setReturnLocation,
        }}
      ></GooglePlacesAutocomplete>
    </div>
  );
};

export default ReturnLocation;
