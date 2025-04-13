import React, { useEffect, useState } from "react";
import Backtohome from "../Components/BackToHome";
import Spinner from "../Components/Spinner";
import { MdAdd, MdDelete } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoIosInformationCircle, IoMdInformation } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";
const AdminHome = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/admin/cars`)
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h2 className="text-5xl">Cars List</h2>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <div className="w-12 h-12 flex justify-end">
            <Link to={"/admin/cars/create"}>
              <MdAdd className="w-12 h-12 flex"></MdAdd>
            </Link>
          </div>
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No</th>
                <th className="border border-slate-600 rounded-md">
                  Car Model
                </th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Type
                </th>
                <th className="border border-slate-600 rounded-md">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, i) => (
                <tr key={i}>
                  <td className="border border-slate-600 rounded-md text-center">
                    {i + 1}
                  </td>
                  <td className="border border-slate-600 rounded-md text-center">
                    {car.model}
                  </td>
                  <td className="border border-slate-600 rounded-md text-center max-md:hidden">
                    {car.type}
                  </td>
                  <td className="border border-slate-600 rounded-md text-center">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/admin/cars/edit/${car.id}`}>
                        <MdOutlineModeEdit></MdOutlineModeEdit>
                      </Link>
                      <Link to={`/admin/cars/details/${car.id}`}>
                        <IoMdInformation></IoMdInformation>
                      </Link>
                      <Link to={`/admin/cars/delete/${car.id}`}>
                        <MdDelete></MdDelete>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default AdminHome;
