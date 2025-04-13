import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PickUpDateTime = ({ pickUpDate, setPickUpDate }) => {
  return (
    <div className="mt-14 ml-2">
      <h1 className="text-white flex justify-center">Pick up Date&Time :</h1>
      <div className="flex flex-col items-center space-y-4 h-[80px]">
        <DatePicker
          selected={pickUpDate}
          onChange={(date) => setPickUpDate(date)}
          showTimeSelect
          dateFormat="Pp"
          className="bg-gray-800 text-white border border-gray-600 p-2 rounded w-full"
          popperClassName="react-datepicker-dark"
        />
      </div>
    </div>
  );
};

export default PickUpDateTime;
