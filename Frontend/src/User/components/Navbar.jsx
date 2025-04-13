import React from "react";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="w-full h-[80px] bg-white border-2 flex justify-between">
        <div className="h-[75px] w-[100px] bg-cover bg-no-repeat"></div>
        <div className="flex ml-[-200px] mt-[7px] space-x-4">
          <Link to={"/home"}>
            <h1 className="font-abc text-[40px] border-4 border-hidden hover:border-b-black transition ease-linear duration-500 hover:border-solid hover:border-t-white hover:border-l-white hover:border-r-white">
              Home |
            </h1>
          </Link>
          <Link to={"/cars"}>
            <h1 className="font-abc  text-[40px] border-4 border-hidden hover:border-b-black transition ease-linear duration-500 hover:border-solid hover:border-t-white hover:border-l-white hover:border-r-white">
              Cars |
            </h1>
          </Link>
          <Link>
            <h1 className="font-abc text-[40px] border-4 border-hidden hover:border-b-black transition ease-linear duration-500 hover:border-solid hover:border-t-white hover:border-l-white hover:border-r-white">
              Contact Us
            </h1>
          </Link>
        </div>
        <div className="mt-[7px] border-4 border-black transition ease-linear duration-500 hover:bg-black hover:text-white hover:boder-white">
          <Link>
            <h1 className="font-abc text-[40px]">Reservation</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
