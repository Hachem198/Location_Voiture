import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { TbManualGearboxFilled } from "react-icons/tb";
import { MdPerson } from "react-icons/md";
import { FaRegSnowflake } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const CarNoReserveButton = ({
  model,
  type,
  transmission,
  climatisation,
  nombreSiege,
  prixParJour,
  imgUrl,
}) => {
  const navigate = useNavigate();
  return (
    <div className="border  border-white w-[450px] h-[350px]">
      <div className="h-64 w-full">
        <img src={imgUrl} className="h-full w-full border-b-2 border-white" />
      </div>
      <h1 className="text-white font-cdb text-2xl">{model}</h1>
      <div className="text-white flex ml-2">
        <div className="border w-fit mt-2 flex">
          <TbManualGearboxFilled className="mt-1" />
          <h1>{transmission} transmission</h1>
        </div>
        <div
          className="text-white flex ml-4 mt-2 border"
          title="Number of seats"
        >
          <MdPerson className="mt-1" />
          <h1>{nombreSiege}</h1>
        </div>
        {climatisation ? (
          <div className="border ml-4 mt-2" title="Air conditioning">
            <FaRegSnowflake className="mt-1" />
          </div>
        ) : (
          <div></div>
        )}
        <div className="flex border ml-4 mt-2" title="Price per day">
          <CiMoneyCheck1 className="mt-1" />
          <h1>{prixParJour}DT/Day</h1>
        </div>
      </div>
    </div>
  );
};

export default CarNoReserveButton;
