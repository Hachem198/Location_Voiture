import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Backtohome from "../Components/BackToHome";
import Spinner from "../Components/Spinner";
import { useNavigate } from "react-router-dom";

const EditCar = () => {
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [transmission, setTransmission] = useState("Manual");
  const [climatisation, setClimatisation] = useState("true");
  const [nombreSiege, setNombreSiege] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [prixParJour, setPrixParJour] = useState(0);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/admin/cars/${id}`)
      .then((res) => {
        setModel(res.data.model);
        setImgUrl(res.data.imgUrl);
        setNombreSiege(res.data.nombreSiege);
        setPrixParJour(res.data.prixParJour);
        setType(res.data.type);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  const handleEditCar = () => {
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
      .put(`http://localhost:3000/admin/cars/${id}`, car)
      .then(() => {
        setLoading(false);
        navigate("/admin/cars");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Backtohome></Backtohome>
      <h1 className="text-4xl mt-2">Edit Car</h1>
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
              onChange={(e) => {
                setClimatisation(e.target.value);
              }}
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
            onClick={handleEditCar}
          >
            Confirmer
          </button>
        </div>
      )}
    </div>
  );
};

export default EditCar;
