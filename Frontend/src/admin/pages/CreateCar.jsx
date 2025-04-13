import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Backtohome from "../Components/BackToHome";
import Spinner from "../Components/Spinner";
import { useNavigate } from "react-router-dom";
const imgStart = `.\\src\\assets\\imgs\\`;
const CreateCar = () => {
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [transmission, setTransmission] = useState("Manual");
  const [climatisation, setClimatisation] = useState("true");
  const [nombreSiege, setNombreSiege] = useState();
  const [imgUrl, setImgUrl] = useState(imgStart);
  const [prixParJour, setPrixParJour] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const HandleAddCar = () => {
    const car = {
      model,
      type,
      climatisation,
      transmission,
      prixParJour,
      imgUrl,
      nombreSiege,
    };
    setLoading(true);
    axios
      .post(`http://localhost:3000/admin/cars`, car)
      .then(() => {
        setLoading(false);
        navigate("/admin/cars");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div>
      <Backtohome></Backtohome>
      <h1 className="text-4xl mt-2">Create Car</h1>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="flex flex-col w-[600px] p-4 border-4 border-blue-500 rounded-xl mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4">Model :</label>
            <input
              type="text"
              value={model}
              className="border-black border-2 px-4 py-2 w-full"
              onChange={(e) => setModel(e.target.value.toUpperCase())}
            ></input>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4">Type :</label>
            <input
              type="text"
              value={type}
              className="border-black border-2 px-4 py-2 w-full"
              onChange={(e) => setType(e.target.value)}
            ></input>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4">Climatisation :</label>
            <select
              className="border-2 border-black"
              onChange={(e) => setClimatisation(e.target.value)}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4">Nombre De Siege :</label>
            <input
              type="text"
              value={nombreSiege}
              className="border-black border-2 px-4 py-2 w-full"
              onChange={(e) => setNombreSiege(e.target.value)}
            ></input>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4">Prix Par Jour :</label>
            <input
              type="text"
              value={prixParJour}
              className="border-black border-2 px-4 py-2 w-full"
              onChange={(e) => setPrixParJour(e.target.value)}
            ></input>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4">Transmission :</label>
            <select
              className="border-2 border-black"
              onChange={(e) => setTransmission(e.target.value)}
            >
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4">Url de l'image :</label>
            <input
              type="text"
              value={imgUrl}
              className="border-black border-2 px-4 py-2 w-full"
              onChange={(e) => setImgUrl(e.target.value)}
            ></input>
          </div>
          <button
            className="m-auto border-2 border-blue-500"
            onClick={HandleAddCar}
          >
            Confirmer
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateCar;
