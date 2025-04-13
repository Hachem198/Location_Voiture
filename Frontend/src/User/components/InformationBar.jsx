import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

const InformationBar = () => {
  return (
    <div className="w-full h-[200px] bg-zinc-900 mt-[550px] text-white bg-fixed">
      <div className="ml-[200px] mt-[20px]">
        <p className="flex">
          <GoDotFill className="mt-1" />
          <a className="mb-2">About Us</a>
        </p>
        <p className="flex">
          <GoDotFill className="mt-1" />
          <a className="mb-2">Contact Us</a>
        </p>
        <p className="flex">
          <GoDotFill className="mt-1" />
          <a className="mb-2">Reviews</a>
        </p>
        <p>&copy; 2024 As ... Hire All Rights Reserved</p>
        <div className="flex mt-4">
          <FaInstagram />
          <RiFacebookCircleLine />
        </div>
      </div>
    </div>
  );
};

export default InformationBar;
