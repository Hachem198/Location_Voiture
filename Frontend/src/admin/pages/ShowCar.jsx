import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Backtohome from "../Components/BackToHome";
import Spinner from "../Components/Spinner";
import { Link } from "react-router-dom";
const ShowCar = () => {
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/admin/cars/${id}`)
      .then((res) => {
        setCar(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <Backtohome></Backtohome>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className=" border-blue-400 border-solid border-4  h-[330px] w-[950px] rounded-2xl m-auto text-2xl">
          <h3>Model : {car.model}</h3>
          <h3>Type : {car.type}</h3>
          <h3>
            Climatisation :{" "}
            {car.climatisation ? <span>Yes</span> : <span>No</span>}
          </h3>
          <h3>Nombre de Siege : {car.nombreSiege}</h3>
          <h3>Transmission : {car.transmission}</h3>
          <h3>Prix par Jour : {car.prixParJour}</h3>
          <h3>
            Image :<a href={car.imgUrl}>{car.imgUrl}</a>
          </h3>
          <h3>Created At : {new Date(car.createdAt).toString()}</h3>
          <h3>Updated At : {new Date(car.updatedAt).toString()}</h3>
        </div>
      )}
    </div>
  );
};

export default ShowCar;
