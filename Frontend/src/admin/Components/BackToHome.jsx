import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
const Backtohome = () => {
  return (
    <div className="h-12 w-12">
      <Link to="/admin/cars">
        <MdOutlineKeyboardBackspace className="h-12 w-12" />
      </Link>
    </div>
  );
};

export default Backtohome;
