import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Backtohome from "../Components/BackToHome";
import Spinner from "../Components/Spinner";
import axios from "axios";
const DeleteCar = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const DeleteCar = () => {
    axios
      .delete(`http://localhost:3000/admin/cars/${id}`)
      .then(() => {
        setLoading(true);
        navigate("/admin/cars");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <Backtohome></Backtohome>
      <h1 className="text-4xl mt-4">Delete Car</h1>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="flex flex-col border border-solid border-blue-400 w-[600px] m-auto h-[200px] ">
          <p className="text-center text-4xl mt-2">
            Are you Sure you want to Delete this Car ?
          </p>
          <br />
          <button
            className="bg-red-600 w-[400px] ml-[100px] h-[50px] text-xl"
            onClick={DeleteCar}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteCar;
